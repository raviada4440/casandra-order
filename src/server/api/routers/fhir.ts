import { z } from "zod"

import type { Bundle, Location, Patient, Practitioner, PractitionerRole } from "~node_modules/@types/fhir/r4.d";

import { createTRPCRouter, publicProcedure } from "@server/api/trpc";


const getFHIRPractitioner = async (params: {
  accessToken: string;
  fhirUser: string;
}): Promise<Practitioner>  => {

  const response = await fetch(params.fhirUser as string, {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Practitioner;

  console.log('data: ', data)

  return data;
}

const getFHIRPractitionerRole = async (params: {
  accessToken: string;
  providerAccountId: string;
}): Promise<Bundle>  => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + 'PractitionerRole?practitioner=' + params.providerAccountId)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Bundle;

  console.log('data: ', data)

  return data;
}

const getFHIRPractitionerRoleWithIncludes = async (params: {
  accessToken: string;
  providerAccountId: string;
}): Promise<Bundle>  => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + 'PractitionerRole?practitioner=' + params.providerAccountId + '&_include=PractitionerRole:practitioner&_include=PractitionerRole:location')

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

const getFHIRLocation = async (params: {
  accessToken: string;
  fhirLocation: string;
}): Promise<Location>  => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + params.fhirLocation)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Location;

  console.log('data: ', data)

  return data;
}

const getFHIRPatient = async (params: {
  accessToken: string;
  fhirPatient: string;
}): Promise<Patient>  => {

  const url = new URL('https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/' + params.fhirPatient)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      Accept: "application/json",
    },

  });

  const data = (await response.json()) as Patient;

  console.log('data: ', data)

  return data;
}

export const fhirRouter = createTRPCRouter({


  getPractitioner: publicProcedure
  .input(z.object({ accessToken: z.string(), fhirUser: z.string() }))
  .query(async ({ input}) => {

    const practitioner = await getFHIRPractitioner({accessToken: input.accessToken, fhirUser: input.fhirUser})

    console.log(practitioner)

    return practitioner;

  }),

  getPractitionerRole: publicProcedure
  .input(z.object({ accessToken: z.string(), providerAccountId: z.string() }))
  .query(async ({ input}) => {

    const bundle = await getFHIRPractitionerRole({accessToken: input.accessToken, providerAccountId: input.providerAccountId})

    console.log(bundle)

    let practitionerRole: PractitionerRole = {} as PractitionerRole

    if(bundle.entry && bundle.entry.length > 0) {
      practitionerRole = bundle.entry[0].resource as PractitionerRole
      console.log('practitionerRole: ', practitionerRole)
    }

    return practitionerRole;

  }),

  getPractitionerRoleWithIncludes: publicProcedure
  .input(z.object({ accessToken: z.string(), providerAccountId: z.string() }))
  .query(async ({ input}) => {

    const bundle = await getFHIRPractitionerRoleWithIncludes({accessToken: input.accessToken, providerAccountId: input.providerAccountId})

    // console.log(bundle)

    return bundle;

  }),

  getLocation: publicProcedure
  .input(z.object({ accessToken: z.string(), fhirLocation: z.string() }))
  .query(async ({ input}) => {

    const location = await getFHIRLocation({accessToken: input.accessToken, fhirLocation: input.fhirLocation})

    console.log(location)

    return location;

  }),

  getPatient: publicProcedure
  .input(z.object({ accessToken: z.string(), fhirPatient: z.string() }))
  .query(async ({ input}) => {

    const patient = await getFHIRPatient({accessToken: input.accessToken, fhirPatient: input.fhirPatient})

    console.log(patient)

    return patient;

  }),

});
