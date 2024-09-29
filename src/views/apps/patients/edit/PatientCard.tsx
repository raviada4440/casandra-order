'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { usePatientData } from '.'
import DirectionalIcon from '../../../../components/DirectionalIcon'
import { getLocalizedUrl } from '../../../../utils/i18n'
import type { Locale } from '@configs/i18n'


const PatientNameCard = () => {
  const { patientData } = usePatientData()
  const { lang: locale } = useParams()

  return (
    <>
      <Typography className='flex justify-left items-left' color='primary'>
        <Link href={getLocalizedUrl('/apps/patients/list', locale as Locale)} className='flex items-center gap-1.5 pb-3'>
          <DirectionalIcon
            ltrIconClass='ri-arrow-left-s-line'
            rtlIconClass='ri-arrow-right-s-line'
            className='text-xl'
          />
          <span>Back to List</span>
        </Link>
      </Typography>
      <Card>
        <CardContent>
          <Grid key={patientData.Id}>
            <div className='flex'>
              <div className='flex flex-col'>
                {patientData.FirstName && patientData.LastName && (
                  <Typography variant='h5'>{patientData.FirstName} {patientData.LastName}</Typography>
                )}
                {!patientData.FirstName && !patientData.LastName && (
                  <Typography variant='h5'>New Patient</Typography>
                )}
              </div>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default PatientNameCard
