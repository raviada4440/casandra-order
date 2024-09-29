// Component Imports

import { api } from '~trpc/server'
import type { PatientWithPartialRelations } from '~prisma/generated/zod'
import PatientList from '@/views/apps/patients/list'


const Patients = async () => {


  const patientsData: PatientWithPartialRelations[] = await api.patient.getPatientList.query()
  const totalPatients = patientsData.length
  const totalFhirPatients = patientsData.filter(patient => patient.Source === 'FHIR').length


  return <PatientList patientsData={patientsData} totalPatients={totalPatients} totalFhirPatients={totalFhirPatients} />
}

export default Patients
