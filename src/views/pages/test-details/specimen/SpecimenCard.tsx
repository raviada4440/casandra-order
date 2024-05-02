'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import type { TestCatalogPartialWithRelations } from '~prisma/generated/zod';
import { useTestData } from '..'

const SpecimenCard = () => {
  const { testData } = useTestData()

  // States
  const [formData, setFormData] = useState<TestCatalogPartialWithRelations>(testData)

  const handleFormChange = (field: keyof TestCatalogPartialWithRelations, value: TestCatalogPartialWithRelations[keyof TestCatalogPartialWithRelations]) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Specimen Type'
                value={formData.SpecimenType || ''}
                placeholder='Specimen Type'
                onChange={e => handleFormChange('SpecimenType', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Causes For Rejection'
                value={formData.CausesForRejection || ''}
                placeholder='Causes For Rejection'
                onChange={e => handleFormChange('CausesForRejection', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Reference Ranges'
                value={formData.ReferenceRanges || ''}
                placeholder='ReferenceRanges'
                onChange={e => handleFormChange('ReferenceRanges', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Alternative Specimen'
                value={formData.AlternativeSpecimen || ''}
                placeholder='Alternative Specimen'
                onChange={e => handleFormChange('AlternativeSpecimen', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Special Instructions'
                value={formData.SpecialInstructions || ''}
                placeholder='Special Instructions'
                onChange={e => handleFormChange('SpecialInstructions', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Patient Preparation'
                value={formData.PatientPreparation || ''}
                placeholder='Patient Preparation'
                onChange={e => handleFormChange('PatientPreparation', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label='Specimen Requirements'
                value={formData.SpecimenRequirements || ''}
                placeholder='Specimen Requirements'
                rows={3}
                multiline
                onChange={e => handleFormChange('SpecimenRequirements', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Volume'
                value={formData.Volume || ''}
                placeholder='Volume'
                onChange={e => handleFormChange('Volume', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Minimum Volume'
                value={formData.MinimumVolume || ''}
                placeholder='Minimum Volume'
                onChange={e => handleFormChange('MinimumVolume', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Container'
                value={formData.Container || ''}
                placeholder='Container'
                onChange={e => handleFormChange('Container', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Collection'
                value={formData.Collection || ''}
                placeholder='Collection'
                onChange={e => handleFormChange('Collection', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label='Stability Requirements'
                value={formData.StabilityRequirements || ''}
                placeholder='Stability Requirements'
                rows={3}
                multiline
                onChange={e => handleFormChange('StabilityRequirements', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label='Storage Transportation'
                value={formData.StorageTransportation || ''}
                placeholder='Storage Transportation'
                rows={3}
                multiline
                onChange={e => handleFormChange('StorageTransportation', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className='flex gap-4 flex-wrap'>
              <Button variant='contained' type='submit'>
                Save Changes
              </Button>
              <Button variant='outlined' type='reset' color='secondary' onClick={() => setFormData(testData)}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default SpecimenCard
