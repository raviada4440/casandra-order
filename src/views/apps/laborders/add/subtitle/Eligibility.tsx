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
      {labOrder?.LabOrderSponsoredTestConsent && labOrder?.LabOrderSponsoredTestConsent.length > 0 ? labOrder?.LabOrderSponsoredTestConsent?.map((consent, index) => (
        <div key={index} className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Reviewd By:</Typography>
          <Typography className={'step-subtitle'}> {`${consent.ProviderName}`}</Typography>
          <Typography className='step-subtitle min-is-[65px]'>Consented At:</Typography>
          <Typography className={'step-subtitle'}> {`${consent.ConsentAt}`}</Typography>
        </div>
      )) : (
        <>
          <div className='flex items-center gap-4'>
            <Typography className='step-subtitle min-is-[65px]'>Reviewd By: </Typography>
            <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
          <div className='flex items-center gap-4'>
            <Typography className='step-subtitle min-is-[65px]'>Consented At: </Typography>
            <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
        </>
      )}
    </div>
  )
}

export default BillingSubtitle
