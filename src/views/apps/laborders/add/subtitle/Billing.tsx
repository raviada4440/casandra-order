// React Imports
import { useContext } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'


// Component Imports
import { LabOrderContext } from '..';

const BillingSubtitle = () => {

  // Vars
  const { labOrder } = useContext(LabOrderContext);

  return (
    <div>
      {labOrder?.LabOrderBilling && labOrder?.LabOrderBilling.length > 0 ? labOrder?.LabOrderBilling?.map((billing) => (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Healthplan Id:</Typography>
          <Typography className={`step-subtitle`}> {`${billing.HealthPalnId}`}</Typography>
       </div>
       <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Subscriber Id:</Typography>
          <Typography className={`step-subtitle`}> {`${billing.SubscriberId}`}</Typography>
        </div>
        </>
      )) : (
        <>
          <div className='flex items-center gap-4'>
            <Typography className='step-subtitle min-is-[65px]'>Healthplan Id: </Typography>
            <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
          <div className='flex items-center gap-4'>
            <Typography className='step-subtitle min-is-[65px]'>Subscriber Id: </Typography>
            <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
        </>
      )}
    </div>
  )
}

export default BillingSubtitle
