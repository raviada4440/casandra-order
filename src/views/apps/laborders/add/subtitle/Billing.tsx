// React Imports
import { useContext } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'


// Component Imports
import { LabOrderContext } from '..'

const useStyles = makeStyles({
  cell25: {
    maxWidth: 25,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
})

const BillingSubtitle = () => {

  // Vars
  const { labOrder } = useContext(LabOrderContext);
  const classes = useStyles();

  return (
    <div>
      { labOrder.LabOrderBilling && labOrder.LabOrderBilling.length > 1 ? labOrder.LabOrderBilling?.map((billing, index) => (
        <div key={index} className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Healthplan Id:</Typography>
          <Typography className={`${classes.cell25} step-subtitle`}> {`${billing.HealthPalnId}`}</Typography>
          <Typography className='step-subtitle min-is-[65px]'>Sponsor Test Coupon:</Typography>
          <Typography className={`${classes.cell25} step-subtitle`}> {`${billing.SponoseredTestCouponCode}`}</Typography>
        </div>
      )) : (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Healthplan Id: </Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Sponsor Test Coupon: </Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        </>
      )}
    </div>
  )
}

export default BillingSubtitle
