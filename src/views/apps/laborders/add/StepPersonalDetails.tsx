// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'


// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { useLabOrder } from '.'

import type { Patient } from '~prisma/generated/zod'

type Props = {
  activeStep: number
  handleNext: (patient: Patient) => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const StepPersonalDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {

  // Vars
  const { labOrder } = useLabOrder() || {};

  const [formData, setFormData] = useState<Patient>(labOrder.Patient || {} as Patient)

  const onNextClick = () => {
    handleNext(formData);
  };

  const handleFormChange = (field: keyof Patient, value: Patient[keyof Patient]) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleMRNChange = (value: string) => {
    labOrder.PatientMRN = value
  }


  return (
    <form onSubmit={e => e.preventDefault()}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='Last Name'
            value={formData.LastName || ''}
            placeholder='Test Name'
            onChange={e => handleFormChange('LastName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label='First Name'
            value={formData.FirstName || ''}
            placeholder='First Name'
            onChange={e => handleFormChange('FirstName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label='Date Of Birth'
            value={formData.DateOfBirth || ''}
            placeholder='Date Of Birth'
            onChange={e => handleFormChange('DateOfBirth', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label='Gender'
            value={formData.Gender || ''}
            placeholder='Gender'
            onChange={e => handleFormChange('Gender', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label='Email'
            value={formData.Email || ''}
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
            value={formData.Mobile || ''}
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
              onClick={onNextClick}
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
  )
}

export default StepPersonalDetails
