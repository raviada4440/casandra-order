'use client'

import { useContext } from 'react';

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import { useSession } from 'next-auth/react'

import { LabOrderContext } from '.';



const AccountCard = () => {
  // Hooks
  const { labOrder } = useContext(LabOrderContext);

  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const { data: session } = useSession()

  const orderingPhysicianCredentials = session?.user.UserAttribute?.Provider?.Credentials ? session?.user.UserAttribute?.Provider?.Credentials : ''
  const orderingPhysicianName = session?.user.UserAttribute?.Provider && orderingPhysicianCredentials.length > 0 ? session?.user.UserAttribute?.Provider?.Name + ', ' + orderingPhysicianCredentials : session?.user.UserAttribute?.Provider?.Name
  const orderingPhysiciaSpecialty = session?.user.UserAttribute?.Provider?.Specialty ? session?.user.UserAttribute?.Provider?.Specialty  : ''

  const treatingPhysicianCredentials = labOrder?.TreatingProvider ? labOrder.TreatingProvider?.Credentials ? labOrder.TreatingProvider?.Credentials : '' : ''
  const treatingPhysicianName = labOrder?.TreatingProvider && treatingPhysicianCredentials.length > 0 ? labOrder.TreatingProvider?.Name + ', ' + treatingPhysicianCredentials : labOrder.TreatingProvider?.Name ? labOrder.TreatingProvider?.Name : ''
  const treatingPhysiciaSpecialty = labOrder?.TreatingProvider ? labOrder.TreatingProvider?.Specialty  : ''

  const organizationName = labOrder?.Organization ? labOrder.Organization?.OrgName : ''
  const organizationAddress = labOrder?.Organization ? labOrder.Organization?.OrgAddress  : ''
  const organizationCityState = labOrder?.Organization ? labOrder.Organization?.OrgCity + ', ' +  labOrder.Organization?.OrgState + ' - ' + labOrder.Organization?.OrgZip : ''

  return (
    <Card>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className='ri-account-pin-circle-line text-3xl text-primary' />x
          <Typography variant='h5' className='text-primary'>
            Account
          </Typography>
        </div>

        <Grid container spacing={6}>
        <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={1}
              className='sm:[&:nth-of-type(odd)>div]:pie-6 sm:[&:nth-of-type(odd)>div]:border-ie md:[&:not(:last-child)>div]:pie-6 md:[&:not(:last-child)>div]:border-ie'
            >
            <div className='flex flex-col gap-2'>
              <Typography className='font-medium' color='text.primary'>
                Organization
              </Typography>
              <div>
                <Typography>{`${organizationName}`}</Typography>
                <Typography>{`${organizationAddress}`}</Typography>
                <Typography>{`${organizationCityState}`}</Typography>
              </div>
            </div>
            {isBelowMdScreen && !isBelowSmScreen && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': true
                  })}
                />
              )}
            {isBelowSmScreen && <Divider className='mbs-6' />}
          </Grid>
          <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={2}
              className='sm:[&:nth-of-type(odd)>div]:pie-6 sm:[&:nth-of-type(odd)>div]:border-ie md:[&:not(:last-child)>div]:pie-6 md:[&:not(:last-child)>div]:border-ie'
            >
            <div className='flex flex-col gap-2'>
              <Typography className='font-medium' color='text.primary'>
                Ordering Physician
              </Typography>
              <div>
                <Typography>{`${orderingPhysicianName}`}</Typography>
                <Typography>{`${orderingPhysiciaSpecialty}`}</Typography>
              </div>
            </div>
            {isBelowMdScreen && !isBelowSmScreen && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': true
                  })}
                />
              )}
            {isBelowSmScreen && <Divider className='mbs-6' />}
          </Grid>
          <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={3}
            >
            <div className='flex flex-col gap-2'>
              <Typography className='font-medium' color='text.primary'>
                Treating Physician
              </Typography>
              <div>
                <Typography>{`${treatingPhysicianName}`}</Typography>
                <Typography>{`${treatingPhysiciaSpecialty}`}</Typography>
              </div>
            </div>
            {isBelowMdScreen && !isBelowSmScreen && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': false
                  })}
                />
              )}
            {isBelowSmScreen && <Divider className='mbs-6' />}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AccountCard
