// React Imports
import { redirect } from 'next/navigation'

// Component Imports
import PatientDetails from '@/views/apps/patients/edit'
import { api } from '~trpc/server'

const PatientDetailsPage = async ({ params }: { params: { id: string } }) => {

  // Vars
  const { id } = params;

  // const patientData = await getPatientData(id)
  const patientData = await api.patient.getPatientById.query({ id: id })

  if (!patientData) {
    redirect('/not-found')
  }

  return patientData ? <PatientDetails patientData={patientData} /> : null

}

export default PatientDetailsPage
