// Next Imports
// import { redirect } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'


import { api } from '~trpc/server'
import type { PatientWithRelations } from '~prisma/generated/zod'
import PatientDetails from '@/views/apps/patients/edit'


const EditPage = async ({ params }: { params: { id: string } }) => {

    const patientData = await api.patient.getPatientById.query({ id: params.id })


  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        {patientData ? (
          <PatientDetails patientData={patientData as PatientWithRelations} />
        ) : (
          <div>Patient data not found</div>
        )}
      </Grid>
    </Grid>
  )
}

export default EditPage
