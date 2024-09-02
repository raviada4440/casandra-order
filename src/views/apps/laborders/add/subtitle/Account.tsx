// React Imports
import { useContext, useEffect } from 'react'

import { useSession } from 'next-auth/react';

// MUI Imports
import Typography from '@mui/material/Typography'

import { makeStyles } from '@mui/styles'

// Component Imports
import { LabOrderContext } from '..'
import type { ProviderWithRelations } from '~prisma/generated/zod';

const useStyles = makeStyles({
  cell150: {
    minWidth: 150,
    maxWidth: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
})

const AccountSubtitle = () => {

  // Vars
  const { labOrder, setLabOrder } = useContext(LabOrderContext)
  const classes = useStyles();
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user.UserAttribute?.Provider) {
      const labOrderCopy = { ...labOrder }
      
      labOrderCopy.OrderingProvider = session?.user.UserAttribute?.Provider as ProviderWithRelations;

      // Only update the state if labOrderCopy has changed
      if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrder)) {
        // console.log('labOrderCopyWithOrderingProvider: ', labOrderCopy);
        setLabOrder(labOrderCopy);
      }
    }
  }, [session, labOrder, setLabOrder])

  const organizationName = labOrder?.Organization ? labOrder.Organization?.OrgName : ''

  const orderingPhysicianCredentials = labOrder?.OrderingProvider ? labOrder.OrderingProvider?.Credentials ? labOrder.OrderingProvider?.Credentials : '' : ''
  const orderingPhysicianName = labOrder?.OrderingProvider && orderingPhysicianCredentials.length > 0 ? labOrder.OrderingProvider?.Name + ', ' + orderingPhysicianCredentials : labOrder.OrderingProvider?.Name ? labOrder.OrderingProvider?.Name : ''

  const treatingPhysicianCredentials = labOrder?.TreatingProvider ? labOrder.TreatingProvider?.Credentials ? labOrder.TreatingProvider?.Credentials : '' : ''
  const treatingPhysicianName = labOrder?.TreatingProvider && treatingPhysicianCredentials.length > 0 ? labOrder.TreatingProvider?.Name + ', ' + treatingPhysicianCredentials : labOrder.TreatingProvider?.Name ? labOrder.TreatingProvider?.Name : ''

  return (
    <div>
      { labOrder?.Patient ? (
        <>
        <div className='flex items-center gap-1'>
          <Typography className='step-subtitle min-is-[65px]'>Ordering:</Typography>
          <Typography className={`${classes.cell150} step-subtitle`}>{ `${orderingPhysicianName}` }</Typography>
        </div>
        <div className='flex items-center gap-1'>
          <Typography className='step-subtitle min-is-[65px]'>Treating:</Typography>
          <Typography className={`${classes.cell150} step-subtitle`}>{ `${treatingPhysicianName}` }</Typography>
        </div>
        <div className='flex items-center gap-1'>
          <Typography className='step-subtitle min-is-[65px]'>Location:</Typography>
          <Typography className={`${classes.cell150} step-subtitle`}>{`${organizationName}`}</Typography>
        </div>
      </>
      ) : (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Ordering:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Treating:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Location:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        </>
      )}
    </div>
  )
}

export default AccountSubtitle
