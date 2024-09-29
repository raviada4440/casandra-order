'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'

import type { PatientPartialWithRelations } from '~prisma/generated/zod'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'



const OverviewCard = ({ patientData }: { patientData: PatientPartialWithRelations }) => {
  // States
  const [formData, setFormData] = useState<PatientPartialWithRelations>(patientData)

  const handleFormChange = (field: keyof PatientPartialWithRelations, value: PatientPartialWithRelations[keyof PatientPartialWithRelations]) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='First Name'
                  value={formData?.FirstName || ''}
                  placeholder='First Name'
                  onChange={e => handleFormChange('FirstName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Last Name'
                  value={formData?.LastName || ''}
                  placeholder='Last Name'
                  onChange={e => handleFormChange('LastName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <AppReactDatepicker
                  boxProps={{ className: 'is-full' }}
                  selected={formData?.DateOfBirth ? new Date(formData?.DateOfBirth.getTime() + Math.abs(formData?.DateOfBirth.getTimezoneOffset() * 60000)) : null || null}
                  dateFormat={'MM/dd/yyyy'}
                  onChange={(date: Date) => handleFormChange('DateOfBirth', date)}
                  customInput={<TextField fullWidth label='Date Of Birth' size='medium' />}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel id='select-gender'>Gender</InputLabel>
                  <Select
                    id='gender-select'
                    label='Gender'
                    labelId='select-gender'
                    value={formData?.Gender || ''}
                    onChange={e => handleFormChange('Gender', e.target.value)}
                  >
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                    <MenuItem value='not-disclosed'>Not Disclosed</MenuItem>
                    <MenuItem value='unknown'>Unknown</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
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
                  label='Mobile'
                  placeholder='202 555 0111'
                  value={formData?.Mobile || ''}
                  InputProps={{
                    startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
                  }}
                  onChange={e => handleFormChange('Mobile', e.target.value)}
                />
              </Grid>

            <Grid item xs={12} className='flex gap-4 flex-wrap'>
              <Button variant='contained' type='submit'>
                Save Changes
              </Button>
              <Button variant='outlined' type='reset' color='secondary' onClick={() => setFormData(patientData)}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default OverviewCard
