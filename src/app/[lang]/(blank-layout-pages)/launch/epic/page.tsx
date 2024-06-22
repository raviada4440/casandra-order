// MUI Imports
import Grid from '@mui/material/Grid'

import EpicLaunch from '@/views/EpicLaunch'


// import { api } from '~trpc/server'


const EpicLaunchApp = async () => {
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <EpicLaunch />
      </Grid>
    </Grid>
  )
}

export default EpicLaunchApp
