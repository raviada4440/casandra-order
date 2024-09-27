

import uuid from 'react-native-uuid'

// MUI Imports
import Grid from '@mui/material/Grid'

import type { LabOrderWithRelations } from '~prisma/generated/zod'

import AddLabOrder from '@views/apps/laborders/add'


const LabOrderAdd = async () => {

  const labOrderId = uuid.v4() as string

  const generateOrderNumber = () => {
    // Generate a 5-digit random number
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;

    // Return 'CS' concatenated with the random number
    return `CS${randomNumber}`;
  };

  // States
  const labOrderStatus = { Id: uuid.v4() as string, Status: 'Order Created', StatusDate: new Date() }
  const labOrder = { Id: labOrderId, OrderDate: new Date(), OrderNumber: generateOrderNumber(), LabOrderStatus: [labOrderStatus] }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <AddLabOrder {...labOrder as LabOrderWithRelations}/>
      </Grid>
    </Grid>
  )
}

export default LabOrderAdd
