'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { useTestData } from '.'
import DirectionalIcon from '../../../components/DirectionalIcon'
import { getLocalizedUrl } from '../../../utils/i18n'
import type { Locale } from '@configs/i18n'


const TestNameCard = () => {
  const { testData } = useTestData()
  const { lang: locale } = useParams()

  return (
    <>
      <Typography className='flex justify-left items-left' color='primary'>
        <Link href={getLocalizedUrl('/apps/catalog', locale as Locale)} className='flex items-center gap-1.5 pb-3'>
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
          <Grid key={testData.LabTestId}>
            <div className='flex'>
              <div className='flex flex-col'>
                <Typography variant='h4'>{testData.TestName}</Typography>
                <Typography>{testData.LabTestId} | {testData.Lab?.LabName}</Typography>
              </div>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default TestNameCard
