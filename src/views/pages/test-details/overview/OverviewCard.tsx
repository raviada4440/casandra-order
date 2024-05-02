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

import type { Lab, TestCatalogPartialWithRelations } from '~prisma/generated/zod'


const OverviewCard = ({ testData, labsData }: { testData: TestCatalogPartialWithRelations; labsData: Lab[] }) => {
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Test Name'
                value={formData.TestName || ''}
                placeholder='Test Name'
                onChange={e => handleFormChange('TestName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Lab Test Menu Item URL'
                value={formData.href || ''}
                placeholder='Lab Test Menu Item URL'
                onChange={e => handleFormChange('href', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Lab</InputLabel>
                <Select
                  label='Lab'
                  value={formData.LabId || 0}
                  onChange={e => handleFormChange('LabId', e.target.value)}
                >
                  {labsData.map(lab => (
                    <MenuItem key={lab.LabId} id={lab.LabId.toString()} value={lab.LabId}>
                      {lab.LabName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Lab Test Code'
                value={formData.LabTestId || ''}
                placeholder='Lab Test Code'
                onChange={e => handleFormChange('LabTestId', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Turnaround Time'
                value={formData.TurnAroundTime || ''}
                placeholder='Turnaround Time'
                onChange={e => handleFormChange('TurnAroundTime', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='New York Approved'
                value={formData.NewYorkApproved || ''}
                placeholder='New York Approved'
                onChange={e => handleFormChange('NewYorkApproved', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Level Of Service'
                value={formData.LevelOfService || ''}
                placeholder='Level Of Service'
                onChange={e => handleFormChange('LevelOfService', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Methodology'
                value={formData.Methodology || ''}
                placeholder='Methodology'
                onChange={e => handleFormChange('Methodology', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Test Usage'
                value={formData.TestUsage || ''}
                placeholder='Test Usage'
                onChange={e => handleFormChange('TestUsage', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Test Includes'
                value={formData.TestIncludes || ''}
                placeholder='Test Includes'
                onChange={e => handleFormChange('TestIncludes', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Assay Category'
                value={formData.AssayCategory || ''}
                placeholder='Assay Category'
                onChange={e => handleFormChange('AssayCategory', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Diseases'
                value={formData.Diseases || ''}
                placeholder='Diseases'
                onChange={e => handleFormChange('Diseases', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Alternative Test Name'
                value={formData.AlternativeName || ''}
                placeholder='ThemeSelection'
                onChange={e => handleFormChange('AlternativeName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Alternative Test Name 1'
                value={formData.AlternativeName1 || ''}
                placeholder='Alternative Test Name'
                onChange={e => handleFormChange('AlternativeName1', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Alternative Test Name 2 '
                value={formData.AlternativeName2 || ''}
                placeholder='Alternative Test Name'
                onChange={e => handleFormChange('AlternativeName2', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Alternative Test Name 3'
                value={formData.AlternativeName3 || ''}
                placeholder='Alternative Test Name'
                onChange={e => handleFormChange('AlternativeName3', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Alternative Test Name 4'
                value={formData.AlternativeName4 || ''}
                placeholder='Alternative Test Name'
                onChange={e => handleFormChange('AlternativeName4', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label='Alternative Test Name 5'
                value={formData.AlternativeName5 || ''}
                placeholder='Alternative Test Name'
                onChange={e => handleFormChange('AlternativeName5', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Test Description'
                id='test-description'
                value={formData.TestDescription || ''}
                placeholder='Test Description'
                rows={3}
                multiline
                onChange={e => handleFormChange('TestDescription', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Clinical Significance'
                value={formData.ClinicalSignificance || ''}
                placeholder='Clinical Significance'
                rows={3}
                multiline
                onChange={e => handleFormChange('ClinicalSignificance', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label='Setup Schedule'
                value={formData.SetupSchedule || ''}
                placeholder='Setup Schedule'
                onChange={e => handleFormChange('SetupSchedule', e.target.value)}
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

export default OverviewCard
