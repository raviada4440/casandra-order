// MUI Imports
import Grid from '@mui/material/Grid'

import AddLabOrder from '@views/apps/laborders/add'

// import { api } from '~trpc/server'


const InvoiceAdd = async () => {

  // const labOrder = await api.laborders.getLabOrder.query({ labOrderId: '' })



  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <AddLabOrder />
      </Grid>
    </Grid>
  )
}

export default InvoiceAdd
