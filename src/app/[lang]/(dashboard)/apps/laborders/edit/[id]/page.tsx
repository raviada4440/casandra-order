// Next Imports
// import { redirect } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'

import AddLabOrder from '@views/apps/laborders/add'

import { api } from '~trpc/server'
import type { LabOrderWithRelations } from '~prisma/generated/zod'


const EditPage = async ({ params }: { params: { id: string } }) => {

    const labOrder = await api.laborders.getLabOrder.query({ labOrderId: params.id })


  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <AddLabOrder {...labOrder as LabOrderWithRelations}/>
      </Grid>
    </Grid>
  )
}

export default EditPage
