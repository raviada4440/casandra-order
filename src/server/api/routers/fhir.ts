import { z } from "zod"

import dayjs from 'dayjs';

import type { Bundle, List, Location, Organization, Patient, Practitioner, PractitionerRole } from "fhir/r4"

import type { Patient as PrismaPatient } from '~prisma/generated/zod';

import { createTRPCRouter, publicProcedure } from "@server/api/trpc"



const getFHIRPractitioner = async (params: {
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
  accessToken: string;
  providerAccountId: string;
}): Promise<Bundle> => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + 'PractitionerRole?practitioner=' + params.providerAccountId)

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
  accessToken: string;
  providerAccountId: string;
}): Promise<Bundle> => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + 'PractitionerRole?practitioner=' + params.providerAccountId + '&_include=PractitionerRole:practitioner&_include=PractitionerRole:location')

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
  accessToken: string;
  fhirLocation: string;
}): Promise<Location> => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + params.fhirLocation)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Location;

  // console.log('data: ', data)

  return data;
}

const getFHIROrganization = async (params: {
  accessToken: string;
  fhirOrganization: string;
}): Promise<Organization> => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + params.fhirOrganization)

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
  accessToken: string;
  fhirPatient: string;
}): Promise<Patient> => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + params.fhirPatient)

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
  accessToken: string;
}): Promise<Bundle> => {

  // console.log('accessToken: ', params.accessToken)

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/List?code=patients&identifier=urn:oid:1.2.840.114350.1.13.0.1.7.2.806567|5332')

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
    .input(z.object({ accessToken: z.string(), fhirUser: z.string() }))
    .query(async ({ input }) => {

      const practitioner = await getFHIRPractitioner({ accessToken: input.accessToken, fhirUser: input.fhirUser })

      // console.log(practitioner)

      return practitioner;

    }),

  getPractitionerRole: publicProcedure
    .input(z.object({ accessToken: z.string(), providerAccountId: z.string() }))
    .query(async ({ input }) => {

      const bundle = await getFHIRPractitionerRole({ accessToken: input.accessToken, providerAccountId: input.providerAccountId })

      // console.log(bundle)

      let practitionerRole: PractitionerRole = {} as PractitionerRole

      if (bundle.entry && bundle.entry.length > 0) {
        practitionerRole = bundle.entry[0].resource as PractitionerRole

        // console.log('practitionerRole: ', practitionerRole)
      }

      return practitionerRole;

    }),

  getPractitionerRoleWithIncludes: publicProcedure
    .input(z.object({ accessToken: z.string(), providerAccountId: z.string() }))
    .query(async ({ input }) => {

      const bundle = await getFHIRPractitionerRoleWithIncludes({ accessToken: input.accessToken, providerAccountId: input.providerAccountId })

      // // console.log(bundle)

      return bundle;

    }),

  getLocation: publicProcedure
    .input(z.object({ accessToken: z.string(), fhirLocation: z.string() }))
    .query(async ({ input }) => {

      const location = await getFHIRLocation({ accessToken: input.accessToken, fhirLocation: input.fhirLocation })

      // console.log(location)

      return location;

    }),

  getOrganization: publicProcedure
    .input(z.object({ accessToken: z.string(), fhirOrganization: z.string() }))
    .query(async ({ input }) => {

      const organization = await getFHIROrganization({ accessToken: input.accessToken, fhirOrganization: input.fhirOrganization })

      // console.log(organization)

      return organization;

    }),

  getPatient: publicProcedure
    .input(z.object({ accessToken: z.string(), fhirPatient: z.string() }))
    .query(async ({ input }) => {

      const patient = await getFHIRPatient({ accessToken: input.accessToken, fhirPatient: input.fhirPatient })

      // console.log(patient)

      return patient;

    }),

  getPatientList: publicProcedure
    .input(z.object({ accessToken: z.string() }))
    .query(async ({ input }) => {

      const patientList: PrismaPatient[] = []

      const patientBundle: Bundle = await getFHIRPatientList({ accessToken: input.accessToken })

      if (patientBundle) {
        const list = patientBundle.entry?.[0].resource as List

        if (list && list.entry) {

          for (const entry of list.entry) {
            const patientItem = entry.item;

            const fhirPatientDetails = await getFHIRPatient({ accessToken: input.accessToken, fhirPatient: patientItem.reference as string})

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
