'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
// import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import PatientListTable from './PatientListTable'
import LabOrderCard from './PatientCard'
import { useSettings } from '@core/hooks/useSettings'
import type { PatientWithPartialRelations } from '~prisma/generated/zod'


const PatientList = ({ patientsData, totalPatients, totalFhirPatients }: { patientsData: PatientWithPartialRelations[], totalPatients: number; totalFhirPatients: number }) => {

  const { settings } = useSettings()

  // console.log('settings.columnFilters: ', settings.columnFilters)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <LabOrderCard totalPatients={totalPatients} totalFhirPatients={totalFhirPatients} />
      </Grid>
      <Grid item xs={12}>
        <PatientListTable patientsData={patientsData} columnFiltersData={settings.columnFilters || []} />
      </Grid>
    </Grid>
  )
}

export default PatientList
