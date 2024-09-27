// React Imports
import React, { useContext } from 'react'

import uuid from 'react-native-uuid'

// MUI Imports
import Typography from '@mui/material/Typography'


// Component Imports
import { LabOrderContext } from '..';

const BillingSubtitle = () => {

  // Vars
  const { labOrder } = useContext(LabOrderContext);

  return (
    <div key={uuid.v4() as string}>
      {labOrder?.LabOrderBilling && labOrder?.LabOrderBilling.length > 0 ? labOrder?.LabOrderBilling?.map((billing) => (
        <React.Fragment key={uuid.v4() as string}>

        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Healthplan Id:</Typography>
          <Typography className={`step-subtitle`}> {`${billing.HealthPlanId}`}</Typography>
       </div>
       <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Subscriber Id:</Typography>
          <Typography className={`step-subtitle`}> {`${billing.SubscriberId}`}</Typography>
        </div>
        </React.Fragment>
      )) : (
        <React.Fragment key={uuid.v4() as string}>

          <div className='flex items-center gap-4'>
            <Typography className='step-subtitle min-is-[65px]'>Healthplan Id: </Typography>
            <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
          <div className='flex items-center gap-4'>
            <Typography className='step-subtitle min-is-[65px]'>Subscriber Id: </Typography>
            <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default BillingSubtitle
