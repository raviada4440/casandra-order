// MUI Imports
import Grid from '@mui/material/Grid'

import CernerLaunch from '@/views/CernerLaunch'



// import { api } from '~trpc/server'


const CernerLaunchApp = async () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <CernerLaunch />
      </Grid>
    </Grid>
  )
}

export default CernerLaunchApp
