import { z } from "zod"

import dayjs from 'dayjs';

import type { Bundle, List, Location, Organization, Patient, Practitioner, PractitionerRole } from "fhir/r4"

import type { Patient as PrismaPatient } from '~prisma/generated/zod';

import { createTRPCRouter, publicProcedure } from "@server/api/trpc"



const getFHIRPractitioner = async (params: {
  fhirEndpoint: string;
  accessToken: string;
  fhirUser: string;
}): Promise<Practitioner> => {

  const response = await fetch(params.fhirUser as string, {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Practitioner;

  // console.log('data: ', data)

  return data;
}

const getFHIRPractitionerRole = async (params: {
  fhirEndpoint: string;
  accessToken: string;
  providerAccountId: string;
}): Promise<Bundle> => {

  const url = new URL(params.fhirEndpoint + 'PractitionerRole?practitioner=' + params.providerAccountId)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Bundle;

  // console.log('data: ', data)

  return data;
}

const getFHIRPractitionerRoleWithIncludes = async (params: {
  fhirEndpoint: string;
  accessToken: string;
  providerAccountId: string;
}): Promise<Bundle> => {

  const url = new URL(params.fhirEndpoint + 'PractitionerRole?practitioner=' + params.providerAccountId + '&_include=PractitionerRole:practitioner&_include=PractitionerRole:location')

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Bundle;

  // // console.log('data: ', data)

  return data;
}

const getFHIRLocation = async (params: {
  fhirEndpoint: string;
  accessToken: string;
  fhirLocation: string;
}): Promise<Location> => {

  const url = new URL(params.fhirEndpoint + params.fhirLocation)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Location;

  console.log('data: ', JSON.stringify(data))

  return data;
}

const getFHIROrganization = async (params: {
  fhirEndpoint: string;
  accessToken: string;
  fhirOrganization: string;
}): Promise<Organization> => {

  const url = new URL(params.fhirEndpoint + params.fhirOrganization)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Organization;

  // console.log('data: ', data)

  return data;
}

const getFHIRPatient = async (params: {
  fhirEndpoint: string;
  accessToken: string;
  fhirPatient: string;
}): Promise<Patient> => {

  const url = new URL(params.fhirEndpoint + params.fhirPatient)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Patient;

  // console.log('data: ', data)

  return data;
}

const getFHIRPatientList = async (params: {
  fhirEndpoint: string;
  accessToken: string;
  listOid: string;
}): Promise<Bundle> => {

  // console.log('accessToken: ', params.accessToken)

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/List?code=patients&identifier='+ params.listOid)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Bundle;

  // console.log('data: ', data)

  return data;
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
  } as PrismaPatient
}


export const fhirRouter = createTRPCRouter({


  getPractitioner: publicProcedure
    .input(z.object({ fhirEndpoint: z.string(), accessToken: z.string(), fhirUser: z.string() }))
    .query(async ({ input }) => {

      const practitioner = await getFHIRPractitioner({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, fhirUser: input.fhirUser })

      // console.log(practitioner)

      return practitioner;

    }),

  getPractitionerRole: publicProcedure
    .input(z.object({ fhirEndpoint: z.string(), accessToken: z.string(), providerAccountId: z.string() }))
    .query(async ({ input }) => {

      const bundle = await getFHIRPractitionerRole({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, providerAccountId: input.providerAccountId })

      // console.log(bundle)

      let practitionerRole: PractitionerRole = {} as PractitionerRole

      if (bundle.entry && bundle.entry.length > 0) {
        practitionerRole = bundle.entry[0].resource as PractitionerRole

        // console.log('practitionerRole: ', practitionerRole)
      }

      return practitionerRole;

    }),

  getPractitionerRoleWithIncludes: publicProcedure
    .input(z.object({ fhirEndpoint: z.string(), accessToken: z.string(), providerAccountId: z.string() }))
    .query(async ({ input }) => {

      const bundle = await getFHIRPractitionerRoleWithIncludes({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, providerAccountId: input.providerAccountId })

      // // console.log(bundle)

      return bundle;

    }),

  getLocation: publicProcedure
    .input(z.object({ fhirEndpoint: z.string(), accessToken: z.string(), fhirLocation: z.string() }))
    .query(async ({ input }) => {

      const location = await getFHIRLocation({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, fhirLocation: input.fhirLocation })

      // console.log(location)

      return location;

    }),

  getOrganization: publicProcedure
    .input(z.object({ fhirEndpoint: z.string(), accessToken: z.string(), fhirOrganization: z.string() }))
    .query(async ({ input }) => {

      const organization = await getFHIROrganization({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, fhirOrganization: input.fhirOrganization })

      // console.log(organization)

      return organization;

    }),

  getPatient: publicProcedure
    .input(z.object({ fhirEndpoint: z.string(), accessToken: z.string(), fhirPatient: z.string() }))
    .query(async ({ input }) => {

      const patient = await getFHIRPatient({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, fhirPatient: input.fhirPatient })

      // console.log(patient)

      return patient;

    }),

  getPatientList: publicProcedure
    .input(z.object({ fhirEndpoint: z.string(), accessToken: z.string(), listOid: z.string()}))
    .query(async ({ input }) => {

      const patientList: PrismaPatient[] = []

      const patientBundle: Bundle = await getFHIRPatientList({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, listOid: input.listOid as string})

      if (patientBundle) {
        const list = patientBundle.entry?.[0].resource as List

        if (list && list.entry) {

          for (const entry of list.entry) {
            const patientItem = entry.item;

            const fhirPatientDetails = await getFHIRPatient({ fhirEndpoint: input.fhirEndpoint, accessToken: input.accessToken, fhirPatient: patientItem.reference as string})

            if (fhirPatientDetails) {
              const patient: PrismaPatient = mapPatient(fhirPatientDetails)

              patientList.push(patient);
            }
          }
        }
      }

      return patientList;

    }),

});
