// Next Imports
// import { redirect } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'

import type { PatientOrganizationWithRelations, PatientWithRelations } from '~prisma/generated/zod'
import PatientDetails from '@/views/apps/patients/edit'


const AddPage = async () => {

  const patientData = {
    FirstName: '',
    LastName: '',
    DateOfBirth: null,
    Gender: '',
    Email: '',
    Mobile: '',
    PatientOrganization: [] as PatientOrganizationWithRelations[],
    LabOrder: [],
  } as unknown as PatientWithRelations


  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
          <PatientDetails patientData={patientData} />
      </Grid>
    </Grid>
  )
}

export default AddPage
