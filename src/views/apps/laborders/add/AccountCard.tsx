'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'



const AccountCard = ({ totalOrdersInTransit, totalIncompleteOrders }: { totalOrdersInTransit: number; totalIncompleteOrders: number }) => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  // Vars
  const data = [
    {
      title: totalOrdersInTransit,
      subtitle: 'Orders in Transit',
      icon: 'ri-pages-line'
    },
    {
      title: totalIncompleteOrders,
      subtitle: 'Incomplete Orders',
      icon: 'ri-wallet-line'
    },
    {
      title: totalIncompleteOrders,
      subtitle: 'Incomplete Orders',
      icon: 'ri-wallet-line'
    }
  ]

  return (
    <Card>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className='ri-account-pin-circle-line text-3xl text-primary' />
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
            <div className='flex flex-col gap-4'>
              <Typography className='font-medium' color='text.primary'>
                Organization
              </Typography>
              <div>
                <Typography>Jordan Stevenson</Typography>
                <Typography>Hall-Robbins PLC</Typography>
                <Typography>7777 Mendez Plains</Typography>
                <Typography>(616) 865-4180</Typography>
                <Typography>don85@johnson.com</Typography>
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
            <div className='flex flex-col gap-4'>
              <Typography className='font-medium' color='text.primary'>
                Ordering Physician
              </Typography>
              <div>
              <Typography>Jordan Stevenson</Typography>
                <Typography>Hall-Robbins PLC</Typography>
                <Typography>7777 Mendez Plains</Typography>
                <Typography>(616) 865-4180</Typography>
                <Typography>don85@johnson.com</Typography>
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
            <div className='flex flex-col gap-4'>
              <Typography className='font-medium' color='text.primary'>
                Treating Physician
              </Typography>
              <div>
              <Typography>Jordan Stevenson</Typography>
                <Typography>Hall-Robbins PLC</Typography>
                <Typography>7777 Mendez Plains</Typography>
                <Typography>(616) 865-4180</Typography>
                <Typography>don85@johnson.com</Typography>
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

          {/* {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              className='sm:[&:nth-of-type(odd)>div]:pie-6 sm:[&:nth-of-type(odd)>div]:border-ie md:[&:not(:last-child)>div]:pie-6 md:[&:not(:last-child)>div]:border-ie'
            >
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <Typography variant='h4'>{item.title}</Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <Avatar variant='rounded' className='bs-[42px] is-[42px]'>
                  <i className={classnames('text-[26px]', item.icon)}></i>
                </Avatar>
              </div>
              {isBelowMdScreen && !isBelowSmScreen && index < data.length - 2 && (
                <Divider
                  className={classnames('mbs-6', {
                    'mie-6': index % 2 === 0
                  })}
                />
              )}
              {isBelowSmScreen && index < data.length - 1 && <Divider className='mbs-6' />}
            </Grid>
          ))}*/}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AccountCard
