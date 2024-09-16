// React Imports
import { useContext, useEffect } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'

import dateFormat from 'date-fns/format'

// Component Imports
import { LabOrderContext } from '..';




const EligibilitySubtitle = () => {



  // Vars
  const { labOrder } = useContext(LabOrderContext);

  useEffect(() => {
    console.log('labOrder in EligibilitySubtitle:', labOrder)
  }, [labOrder]);


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return isNaN(date.getTime()) ? '' : dateFormat(date, 'MM/dd/yyyy');
  };


  return (
    <div>
      {labOrder?.LabOrderSponsoredTestConsent && labOrder?.LabOrderSponsoredTestConsent.length > 0 ? labOrder?.LabOrderSponsoredTestConsent?.map((consent, index) => (
        <>
        <div key={index} className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Reviewd By:</Typography>
          <Typography className={'step-subtitle'}> {consent.ProviderName}</Typography>
        </div>
        <div key={index} className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Consented At:</Typography>
          <Typography className={'step-subtitle'}> {formatDate((consent?.ConsentAt || '').toString())} </Typography>
        </div>
        </>
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

export default EligibilitySubtitle
