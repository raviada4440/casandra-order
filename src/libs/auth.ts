// Third-party Imports
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter';

// import { PrismaClient } from '@prisma/client'
import type { NextAuthOptions } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import type { Bundle, Location, Practitioner, OperationOutcome, Patient, Organization } from "fhir/r4";
import dayjs from 'dayjs';

import type { UserAttributePartialRelations } from '~prisma/generated/zod'
import { api } from '~trpc/server'
import { db } from "@server/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,

  // ** Configure one or more authentication providers
  // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
  providers: [
    CredentialProvider({
      // ** The name to display on the sign in form (e.g. 'Sign in with...')
      // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials
      name: 'Credentials',
      type: 'credentials',

      /*
       * As we are using our own Sign-in page, we do not need to change
       * username or password attributes manually in following credentials object.
       */
      credentials: {},
      async authorize(credentials) {
        /*
         * You need to provide your own logic here that takes the credentials submitted and returns either
         * an object representing a user or value that is false/null if the credentials are invalid.
         * For e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
         * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)
         */
        const { email, password } = credentials as { email: string; password: string }

        try {
          // ** Login API Call to match the user credentials and receive user data in response along with his role
          const res = await fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          })

          const data = await res.json()

          if (res.status === 401) {
            throw new Error(JSON.stringify(data))
          }

          if (res.status === 200) {
            /*
             * Please unset all the sensitive information of the user either from API response or before returning
             * user data below. Below return statement will set the user object in the token and the same is set in
             * the session which will be accessible all over the app.
             */
            return data
          }

          return null
        } catch (e: any) {
          throw new Error(e.message)
        }
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    ),

    // ** ...add more providers here
    // EPIC Provider
    {
      id: "epic",
      name: "Epic",
      type: "oauth",
      version: "2.0",
      client: {
        token_endpoint_auth_method: "client_secret_post",
      },
      clientId: process.env.EPIC_CLIENT_ID,
      clientSecret: process.env.EPIC_CLIENT_SECRET,
      wellKnown: process.env.EPIC_WELL_KNOWN_URL,
      authorization: { params: { scope: "openid profile fhirUser" } },
      idToken: true,
      checks: ["pkce", "state"],
      profile(profile) {
        console.log('profile:', profile)

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          password: '',
          emailVerified: new Date(),
        }
      },
    },

    // CERNER Provider
    {
      id: "cerner",
      name: "Cerner",
      type: "oauth",
      client: {
        token_endpoint_auth_method: "client_secret_basic",
      },
      clientId: process.env.CERNER_CLIENT_ID,
      clientSecret: process.env.CERNER_CLIENT_SECRET,
      token: process.env.CERNER_TOKEN_ENDPOINT,
      authorization: {
        url: process.env.CERNER_AUTHORIZATION_ENDPOINT,
        params: { scope: "openid profile fhirUser" }
      },
      idToken: true,
      checks: ["pkce", "state"],
      jwks_endpoint: process.env.CERNER_JKS_ENDPOINT,
      issuer: process.env.CERNER_ISSUER,
      profile(profile) {
        console.log('profile:', profile)

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          password: '',
          emailVerified: new Date(),
        }
      }

    },


  ],

  // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
  session: {
    /*
     * Choose how you want to save the user session.
     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
     * If you use an `adapter` however, NextAuth default it to `database` instead.
     * You can still force a JWT session by explicitly defining `jwt`.
     * When using `database`, the session cookie will only contain a `sessionToken` value,
     * which is used to look up the session in the database.
     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
     */
    strategy: 'jwt',

    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 60 * 60 // ** 1 hour
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
  pages: {
    signIn: '/login'
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
  callbacks: {
    /*
     * While using `jwt` as a strategy, `jwt()` callback will be called before
     * the `session()` callback. So we have to add custom parameters in `token`
     * via `jwt()` callback to make them accessible in the `session()` callback
     */
    async jwt({ token, user, account, profile }) {

      // console.log('token (jwt()):', token)
      // console.log('user (jwt()):', user)
      console.log('account (jwt()):', account)

      // console.log('profile (jwt()):', profile)
      let practitionerRoleBundle: Bundle | OperationOutcome;
      let fhirPatient: Patient | OperationOutcome | null = null;
      let parentOrg: Organization | null = null;
      let childOrg: Location | null = null;

      let providerAccountId = ''
      let fhirEndpoint = ''
      let fhirLocationId = ''
      let fhirPatientId = ''


      if (token && user &&  account ) {
        // Persist the OAuth access_token and or the user id to the token right after signin
        token.accessToken = account.access_token

        token.authType = account.type || ''
        token.authProvider = account.provider || ''
        token.entryPoint = 'standalone'

        if (account && account.scope && account.scope.includes('launch')) {
          console.log('launch:', account.scope)
          token.entryPoint = 'launch'
        }

        if (profile ) {
          token.id = profile?.email

          if (account.provider === 'cerner') {
            providerAccountId = profile.fhirUser.split("/").pop()
            fhirEndpoint = process.env.CERNER_FHIR_ENDPOINT as string
            fhirLocationId = 'Location/' + account.tenant as string
            fhirPatientId = 'Patient/' + account.patient as string
          } else if (account.provider === 'epic') {
            token.id = profile?.email
            providerAccountId = account.providerAccountId
            fhirEndpoint = process.env.EPIC_FHIR_ENDPOINT as string
            fhirLocationId = 'Location/' + account.location as string
            fhirPatientId = 'Patient/' + account.patient as string
          }
        }

        token.fhirEndpoint = fhirEndpoint

        if (token.authType === 'oauth'  && token.entryPoint === 'standalone') {
          practitionerRoleBundle = await api.fhir.getPractitionerRoleWithIncludes.query({ fhirEndpoint: fhirEndpoint, accessToken: account?.access_token as string, providerAccountId: providerAccountId })
          console.log('practitionerRoleBundle:', JSON.stringify(practitionerRoleBundle))

          if (!isOperationOutcome(practitionerRoleBundle)) {
            console.log('practitionerRoleBundle is of type Bundle');
            await processBundle(practitionerRoleBundle, user.id as string)
          }
        }

        if (token.authType === 'oauth' && token.entryPoint === 'launch') {
          console.log('practitionerRoleBundle is of type OperationOutcome');
          const location = await api.fhir.getLocation.query({ fhirEndpoint: fhirEndpoint, accessToken: account?.access_token as string, fhirLocation: fhirLocationId })
          const provider = await api.fhir.getPractitioner.query({ fhirEndpoint: fhirEndpoint, accessToken: account?.access_token as string, fhirUser: profile?.fhirUser as string })

          if (location && location.managingOrganization) {
            parentOrg = await api.fhir.getOrganization.query({ fhirEndpoint: fhirEndpoint, accessToken: account?.access_token as string, fhirOrganization: location.managingOrganization.reference as string })

            if (parentOrg) {
              console.log('parentOrg:', JSON.stringify(parentOrg))
            }
          }

          if (location && location.partOf) {
            childOrg = await api.fhir.getLocation.query({ fhirEndpoint: fhirEndpoint, accessToken: account?.access_token as string, fhirLocation: location.partOf.reference as string })

            if (childOrg) {
              console.log('childOrg:', JSON.stringify(childOrg))
            }
          }

          fhirPatient = await api.fhir.getPatient.query({ fhirEndpoint: fhirEndpoint, accessToken: account?.access_token as string, fhirPatient: fhirPatientId })

          await processLocationProviderPatient(location, parentOrg as Organization, childOrg as Location, provider, fhirPatient, user.id as string)
        }

        if (user) {
          if (user.name && user.email && user.UserAttribute) {
            /*
            * For adding custom parameters to user in session, we first need to add those parameters
            * in token which then will be available in the `session()` callback
            */
            token.name = user.name
            token.UserAttribute = user?.UserAttribute as UserAttributePartialRelations
          } else if (account) {
            const oathUser = await api.user.getUserById.query({ id: user.id as string })

            if (oathUser) {
              token.name = oathUser?.UserAttribute?.Provider?.Name
              token.UserAttribute = oathUser?.UserAttribute as UserAttributePartialRelations
            }

            if (fhirPatient && !isOperationOutcome(fhirPatient) && fhirPatient.id) {
              token.patientId = fhirPatient.id
            }
          }
        }
      }

      return token
    },
    async session({ session, token }) {
      // console.log('session (session():', session)
      // console.log('token (session()):', token)

      if (session && session.user) {
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        // session.user.name = token.name
        if (token && token.UserAttribute) {
          session.user.UserAttribute = token.UserAttribute as UserAttributePartialRelations
        }

        if (token && token.patientId) {
          session.patientId = token.patientId
        }

        if (token && token.accessToken) {
          session.accessToken = token.accessToken
        }

        if (token && token.authType) {
          session.authType = token.authType
        }

        if (token && token.authProvider) {
          session.authProvider = token.authProvider
        }

        if (token && token.entryPoint) {
          session.entryPoint = token.entryPoint
        }

        if (token && token.fhirEndpoint) {
          session.fhirEndpoint = token.fhirEndpoint
        }

      }

      console.log('session (session()):', session)

      return session
    },
    async signIn({ account }) {
      // console.log('user (signIn()):', user)
      // console.log('account (signIn()):', account)
      // console.log('profile (signIn()):', profile)

      if (account) {
        const dstu2PatientExistsIn = "__epic.dstu2.patient" in account

        if (dstu2PatientExistsIn) {
          account.epic_dstu2_patient = account["__epic.dstu2.patient"]
          delete account["__epic.dstu2.patient"]
        }

        const userExistsIn = "user" in account

        if (userExistsIn) {
          account.user_email = account["user"]
          delete account["user"]
        }

        const needPatientBanner = "need_patient_banner" in account

        if (needPatientBanner) {
          account.need_patient_banner = account["need_patient_banner"]

          if (typeof account.need_patient_banner === 'boolean') {
            account["need_patient_banner"] = account.need_patient_banner ? 'true' : 'false'
          }
        }
      }

      // console.log('account after deleting (signIn()):', account)
      return true
    }

  },
}

export const processBundle = async (bundle: Bundle, userId: string) => {

  if (bundle && bundle.entry && bundle.entry.length > 0) {
    let org: any = {}
    let provider: any = {}
    let userAttribute: any = {}

    for (const entry of bundle.entry) {
      if (entry.resource && entry.resource.resourceType === 'Location') {
        const location: Location = entry.resource as Location

        // console.log('location:', location)
        org = mapLocation(location, 0, 'Organization', null);
      }

      if (entry.resource && entry.resource.resourceType === 'Practitioner') {
        const practitioner: Practitioner = entry.resource as Practitioner

        // console.log('practitioner:', practitioner)
        provider = mapProvider(practitioner);
      }

      if (entry.resource && entry.resource.resourceType === 'PractitionerRole') {
        // const practitionerRole: PractitionerRole = entry.resource as PractitionerRole
        // console.log('practitionerRole:', practitionerRole)
        userAttribute = {
          UserId: userId,
          UserType: 'Provider',
        }
      }
    }

    const organization = { Organization: { connectOrCreate: { where: { Id: org.Id }, create: org } } }
    const providerToProviderOrg = { ...provider, ProviderOrganization: { connectOrCreate: { where: { Id: provider.Id }, create: organization } } }
    const userAttributeProvider = { ...userAttribute, Provider: { connectOrCreate: { where: { Id: provider.Id }, create: providerToProviderOrg } } }

    // console.log('userAttributeProvider:', JSON.stringify(userAttributeProvider))
    const userAttributeAfterCreate = await api.directory.addUserAttribute.mutate(userAttributeProvider)

    console.log('orgAfterCreate:', JSON.stringify(userAttributeAfterCreate))

  }
}

const mapOrganization = (organization: Organization) => {

  return {
    Id: organization.id,
    OrgName: organization.name ? organization.name : 'Epic Health Systems',
    OrgType: 'Organization',
    Level: 0,
    ParentId: null,
    OrgAddress: organization.address?.[0].line?.join(' '),
    OrgCity: organization.address?.[0].city,
    OrgState: organization.address?.[0].state,
    OrgZip: organization.address?.[0].postalCode,
  }

}

const mapLocation = (location: Location, level: number, locationType: string, parentId: any) => {
  return {
    Id: location.id,
    OrgName: location.name ? location.name : 'Epic Health Systems',
    OrgType: locationType,
    Level: level,
    ParentId: parentId,
    OrgAddress: location.address?.line?.join(' '),
    OrgCity: location.address?.city,
    OrgState: location.address?.state,
    OrgZip: location.address?.postalCode,
  }

}

const mapProvider = (practitioner: Practitioner) => {

  return {
    Id: practitioner.id,
    Name: practitioner.name?.[0].family + ' ' + practitioner.name?.[0].given?.[0],
    NPI: practitioner.identifier?.[0].value,
    Credentials: practitioner.qualification?.[0].code?.text,
    Gender: practitioner.gender
  }
}

const mapPatient = (fhirPatient: Patient) => {
  let email = ''
  let mobile = ''

  if (fhirPatient.telecom) {
    for (const telecom of fhirPatient.telecom) {
      if (telecom.system === 'email') {
        email = telecom.value ? telecom.value : ''
      }

      if (telecom.system === 'phone') {
        mobile = telecom.value ? telecom.value : ''
      }
    }
  }

  return {
    Id: fhirPatient.id,
    FirstName: fhirPatient.name?.[0].given?.[0],
    LastName: fhirPatient.name?.[0].family,
    DateOfBirth: dayjs(fhirPatient.birthDate, 'YYYY-MM-DD').toDate(),
    Gender: fhirPatient.gender,
    Email: email,
    Mobile: mobile,

  }
}

const isOperationOutcome = (obj: any): obj is OperationOutcome => {
  return obj && obj.resourceType === 'OperationOutcome' && Array.isArray(obj.issue);
}

const processLocationProviderPatient = async (location: Location, parentOrg: Organization, childOrg: Location, practitioner: Practitioner, patient: Patient, userId: string) => {
  let org: any = {}
  let parentOrganization: any = {}
  let provider: any = {}
  let userAttribute: any = {}
  let patientObj: any = {}
  let parentOrgId = null

  if (parentOrg && parentOrg.id) {
    parentOrgId = parentOrg.id
    parentOrganization = mapOrganization(parentOrg)
    const uparentOrgAfterCreate = await api.directory.addOrganization.mutate(parentOrganization)

    console.log('uparentOrgAfterCreate:', JSON.stringify(uparentOrgAfterCreate))

  }

  if (parentOrgId && parentOrgId.length > 0) {
    org = mapLocation(location, 1, 'Location', parentOrgId)
  } else {
    org = mapLocation(location, 0, 'Organization', parentOrgId)
  }

  provider = mapProvider(practitioner)
  userAttribute = {
    UserId: userId,
    UserType: 'Provider',
  }
  patientObj = mapPatient(patient)

  const organization = { Organization: { connectOrCreate: { where: { Id: org.Id }, create: org } } }
  const providerToProviderOrg = { ...provider, ProviderOrganization: { connectOrCreate: { where: { Id: provider.Id }, create: organization } } }
  const userAttributeProvider = { ...userAttribute, Provider: { connectOrCreate: { where: { Id: provider.Id }, create: providerToProviderOrg } } }

  console.log('userAttributeProvider:', JSON.stringify(userAttributeProvider))

  // const userAttributeAfterCreate = await api.directory.addUserAttribute.mutate(userAttributeProvider)
  // console.log('orgAfterCreate:', JSON.stringify(userAttributeAfterCreate))

  const patientAfterCreate = await api.patient.upsertPatient.mutate(patientObj)

  console.log('patientAfterCreate:', JSON.stringify(patientAfterCreate))


}

