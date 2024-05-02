'use client'

import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

// import Typography from '@mui/material/Typography'
// import Avatar from '@mui/material/Avatar'
// import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// Next Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Components Imports
// import OptionMenu from '@core/components/option-menu'

// type DataType = {
//   avatarSrc: string
//   title: string
//   cardNumber: string
//   alt: string
// }

// Vars
// const data: DataType[] = [
//   {
//     avatarSrc: '/images/logos/mastercard.png',
//     title: 'Credit Card',
//     cardNumber: '2566 xxxx xxxx 8908',
//     alt: 'master-card'
//   },
//   {
//     avatarSrc: '/images/logos/dinners-club.png',
//     title: 'Credit Card',
//     cardNumber: '8990 xxxx xxxx 6852',
//     alt: 'credit-card'
//   }
// ]

const UpgradePlan = () => {
  // Hooks
  const { lang: locale } = useParams()

  return (
    <Card>
      <CardHeader
        title='Manage Test Catalogs'
        className='flex text-center justify-between'
      />
      <CardMedia image='/images/cards/testcatalog.png' className='m-2 bs-[280px]' />
      <CardContent>
        <Button
          variant='contained'
          color='primary'
          href={getLocalizedUrl('apps/catalog', locale as Locale)}
          target='_blank'
          endIcon={<i className='ri-external-link-line text-xl' />}
          fullWidth>
          Universal Test Catalog
        </Button>
      </CardContent>
    </Card>
  )
}

export default UpgradePlan
