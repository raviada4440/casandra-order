'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import OverviewCard from './OverviewCard'
import { usePatientData } from '..';


const Overview = () => {

  const { patientData } = usePatientData() || {};


  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <OverviewCard patientData={patientData} />
      </Grid>
    </Grid>
  )
}

export default Overview
