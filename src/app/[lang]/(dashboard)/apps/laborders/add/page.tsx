// MUI Imports
import Grid from '@mui/material/Grid'

import AddLabOrderCdx from '@views/apps/laborders/add'

// import { api } from '~trpc/server'


const LabOrderAdd = async () => {

  // const labOrder = await api.laborders.getLabOrder.query({ labOrderId: '' })



  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <AddLabOrderCdx />
      </Grid>
    </Grid>
  )
}

export default LabOrderAdd
