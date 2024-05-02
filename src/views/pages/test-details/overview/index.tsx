'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import OverviewCard from './OverviewCard'
import { useTestData } from '..';


const Overview = () => {

  const { testData, labsData } = useTestData() || {};


  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <OverviewCard testData={testData} labsData={labsData} />
      </Grid>
    </Grid>
  )
}

export default Overview
