// React Imports
import { useContext, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'


// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { LabOrderContext } from '.'

import type { PatientWithRelations } from '~prisma/generated/zod'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const StepPatientDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {

  // Vars
  const { labOrder, setLabOrder } = useContext(LabOrderContext);
  const [formData, setFormData] = useState<PatientWithRelations>(labOrder.Patient as PatientWithRelations)

  // const firstRender = useRef(true)


  const handleFormChange = (field: keyof PatientWithRelations, value: PatientWithRelations[keyof PatientWithRelations]) => {
    const updatedFormData = { ...formData, [field]: value };

    setFormData(updatedFormData);
    setLabOrder({ ...labOrder, Patient: updatedFormData })
  }

  const handleMRNChange = (value: string) => {
    setLabOrder({ ...labOrder, PatientMRN: value })
  }

  return (
    <Card>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className='ri-user-line text-3xl text-primary' />
          <Typography variant='h5' className='text-primary'>
            Patient Demographics
          </Typography>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Last Name'
                value={formData?.LastName || ''}
                placeholder='Last Name'
                onChange={e => handleFormChange('LastName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='First Name'
                value={formData?.FirstName || ''}
                placeholder='First Name'
                onChange={e => handleFormChange('FirstName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label='Date Of Birth'
                value={formData?.DateOfBirth || ''}
                placeholder='Date Of Birth'
                onChange={e => handleFormChange('DateOfBirth', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label='Gender'
                value={formData?.Gender || ''}
                placeholder='Gender'
                onChange={e => handleFormChange('Gender', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label='Email'
                value={formData?.Email || ''}
                placeholder='Email'
                onChange={e => handleFormChange('Email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='MRN'
                value={labOrder.PatientMRN || ''}
                placeholder='MRN'
                onChange={e => handleMRNChange(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Mobile'
                placeholder='202 555 0111'
                value={formData?.Mobile || ''}
                InputProps={{
                  startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
                }}
                onChange={e => handleFormChange('Mobile', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <div className='flex items-center justify-between'>
                <Button
                  variant='outlined'
                  color='secondary'
                  disabled={activeStep === 0}
                  onClick={handlePrev}
                  startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
                >
                  Previous
                </Button>
                <Button
                  variant='contained'
                  color={activeStep === steps.length - 1 ? 'success' : 'primary'}
                  onClick={handleNext}
                  endIcon={
                    activeStep === steps.length - 1 ? (
                      <i className='ri-check-line' />
                    ) : (
                      <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
                    )
                  }
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default StepPatientDetails
