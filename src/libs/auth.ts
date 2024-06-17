// Third-party Imports
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'

// import { PrismaClient } from '@prisma/client'
import type { NextAuthOptions } from 'next-auth'

import type { Adapter } from 'next-auth/adapters'

import type { Bundle, Location, Practitioner, PractitionerRole } from "~node_modules/@types/fhir/r4.d";

import type { UserAttributePartialRelations } from '~prisma/generated/zod'

import { api } from '~trpc/server'

import { db } from "@server/db";


// const prisma = new PrismaClient()

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
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),

    // ** ...add more providers here
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
      wellKnown: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/.well-known/openid-configuration",
      authorization: { params: { scope: "openid profile fhirUser" } },
      idToken: true,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          password: '',
          emailVerified: new Date(),
        }
      },
    }

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
      console.log('token (jwt()):', token)
      console.log('user (jwt()):', user)
      console.log('account (jwt()):', account)
      console.log('profile (jwt()):', profile)

      if(account && profile && user && profile.fhirUser && account.access_token && user.id ) {
        // const epicProvider: Practitioner = await api.fhir.getPractitioner.query({accessToken: account?.access_token as string, fhirUser: profile?.fhirUser as string})

        // console.log('epicProvider:', epicProvider)

        // const epicProviderRole: PractitionerRole = await api.fhir.getPractitionerRole.query({accessToken: account?.access_token as string, providerAccountId: account?.providerAccountId as string})

        // console.log('epicProviderRole:', epicProviderRole)
        // console.log('epic location:', epicProviderRole.location)

        // for (const location of epicProviderRole.location as Reference[]) {
        //   console.log('location:', location)

        //   const epicLocation: Location = await api.fhir.getLocation.query({accessToken: account?.access_token as string, fhirLocation: location.reference as string})

        //   console.log('epicLocation:', epicLocation)
        // }

        const practitionerRoleBundle: Bundle = await api.fhir.getPractitionerRoleWithIncludes.query({accessToken: account?.access_token as string, providerAccountId: account?.providerAccountId as string})

        processBundle(practitionerRoleBundle, user.id as string)

        // console.log('practitionerRoleBundle:', practitionerRoleBundle)

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
          const oathUser = await api.user.getUserById.query({id: user.id as string})

          if (oathUser) {
            token.name = oathUser?.UserAttribute?.Provider?.Name
            token.UserAttribute = oathUser?.UserAttribute as UserAttributePartialRelations
          }
        }
      }

      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = profile?.email
      }

      return token
    },
    async session({ session, token }) {

      console.log('session (session():', session)
      console.log('token (session()):', token)

      if (session && session.user) {
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        // session.user.name = token.name
        if (token && token.UserAttribute) {
          session.user.UserAttribute = token.UserAttribute as UserAttributePartialRelations
        }
      }

      return session
    },

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

        console.log('location:', location)
        org = mapLocation(org, location);
      }

      if (entry.resource && entry.resource.resourceType === 'Practitioner') {
        const practitioner: Practitioner = entry.resource as Practitioner

        console.log('practitioner:', practitioner)
        provider = mapProvider(provider, practitioner);
      }

      if (entry.resource && entry.resource.resourceType === 'PractitionerRole') {
        const practitionerRole: PractitionerRole = entry.resource as PractitionerRole

        console.log('practitionerRole:', practitionerRole)

        userAttribute = {
          UserId: userId,
          UserType: 'Provider',
        }
      }
    }

    const organization = { Organization: { connectOrCreate: { where: { Id: org.Id }, create: org } } }

    const providerToProviderOrg = {...provider,  ProviderOrganization: { connectOrCreate: { where: { Id: provider.Id }, create: organization }}}

    const userAttributeProvider = {...userAttribute, Provider: { connectOrCreate: { where: { Id: provider.Id },create : providerToProviderOrg }}}


    console.log('userAttributeProvider:', JSON.stringify(userAttributeProvider))

    const userAttributeAfterCreate = await api.directory.addOrganization.mutate(userAttributeProvider)

    console.log('orgAfterCreate:', JSON.stringify(userAttributeAfterCreate))

  }
}

const mapLocation = (org: any, location: Location) => {

  org = {
    Id: location.id,
    OrgName: location.name ? location.name : 'Epic Health Systems',
    OrgType: 'Organization',
    Level: 0,
    ParentId: null,
    OrgAddress: location.address?.line?.join(' '),
    OrgCity: location.address?.city,
    OrgState: location.address?.state,
    OrgZip: location.address?.postalCode,
  };

  return org;

}

const mapProvider = (provider: any, practitioner: Practitioner) => {

  provider = {
    Id: practitioner.id,
    Name: practitioner.name?.[0].family + ' ' + practitioner.name?.[0].given?.[0],
    NPI: practitioner.identifier?.[0].value,
    Credentials: practitioner.qualification?.[0].code?.text,
    Gender: practitioner.gender
  };

  return provider;
}

