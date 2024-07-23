// React Imports
import { useContext, useEffect, useRef, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { DialogActions } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import { TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

// Styled Component Imports

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import type { LabOrderSpecimenWithRelations } from '~prisma/generated/zod'
import { LabOrderContext } from '..'




const specimenTypes = [
  {
    Name: 'Blood',
    Description: 'Blood, plasma, serum, red blood cells'
  },
  {
    Name: 'Urine',
    Description: 'Random, 24-hour'
  },
  {
    Name: 'Stool',
    Description: 'Random, 24-hour'
  },
  {
    Name: 'Microbiology Specimen',
    Description: 'Swab, urine, sputum, blood, stool'
  },
  {
    Name: 'Microbiology Organism',
    Description: 'Actively growing pure culture of microorganism (slant, broth)'
  },
  {
    Name: 'Special Collections',
    Description: 'Cerebrospinal fluid (CSF), chain of custody, coagulation studies, stones, saliva, metals (serum, blood, urine, hair, nails), pathology (nerve, muscle, renal)'
  },
]

type AddSpecimenProps = {
  open: boolean
  setOpen: (open: boolean) => void
  specimenRecord: LabOrderSpecimenWithRelations
}

const AddSpecimenDetails = ({ open, setOpen, specimenRecord }: AddSpecimenProps) => {
  // States
  const { labOrder, setLabOrder, collectionMethod } = useContext(LabOrderContext);
  const [formData, setFormData] = useState<LabOrderSpecimenWithRelations>(specimenRecord)
  const [inputValue, setInputValue] = useState('');
  const hasSetFormData = useRef(false);

  console.log('collectionMethod ', collectionMethod)
  
  useEffect(() => {
    if (open && !hasSetFormData.current) {
      // console.log('empty specimenRecord received: ', specimenRecord);
      setFormData({ ...specimenRecord });
      hasSetFormData.current = true;
    } else if (!open) {
      hasSetFormData.current = false;
    }
  }, [open, specimenRecord]);

  const handleFormChange = (field: keyof LabOrderSpecimenWithRelations, value: LabOrderSpecimenWithRelations[keyof LabOrderSpecimenWithRelations]) => {
    const updatedFormData = { ...formData, [field]: value };

    setFormData(updatedFormData as LabOrderSpecimenWithRelations);
  }

  const handleSave = (specimen: LabOrderSpecimenWithRelations) => {
    if (specimen) {
      // console.log('specimen: ', specimen)

      // Create a copy of labOrder
      const labOrderCopy = { ...labOrder }

      // Add the specimen to LabOrderSpecimen
      labOrderCopy.LabOrderSpecimen = [...(labOrderCopy.LabOrderSpecimen || []), specimen]

      // console.log('labOrderCopy: ', labOrderCopy)

      // Update labOrder
      setLabOrder(labOrderCopy)

      // console.log('labOrder: ', labOrder)
      setFormData({} as LabOrderSpecimenWithRelations)
    }
  }

  return (
    <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={() => setOpen(false)}>
      <DialogTitle
        variant='h4'
        className='flex gap-2 flex-col text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        Specimen Details
      </DialogTitle>
      <DialogContent className='flex flex-col gap-6 pbs-0 pbe-10 pli-10 sm:pli-16 sm:pbe-16'>
        <IconButton onClick={() => setOpen(false)} className='absolute block-start-4 inline-end-4'>
          <i className='ri-close-line' />
        </IconButton>
        <div className='flex flex-col gap-2 mt-4'>
          <form onSubmit={e => e.preventDefault()}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <Autocomplete

                    // value={specimenTypes.find(option => option.Name === formData?.SpecimenType || '')}
                    onChange={(event: any, newValue: any) => {
                      handleFormChange('SpecimenType', newValue.Name);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    id="specimen-type-select"
                    getOptionLabel={(option) => `${option.Name}`}
                    isOptionEqualToValue={(option, value) => option.Name === value.Name}
                    options={specimenTypes}
                    renderOption={(props, option: any, selected) => (
                      <li {...props} key={option.Name} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
                        <Grid container alignItems="center">
                          <Grid item xs={3}>
                            {option.Name}
                          </Grid>
                          <Grid item xs={9}>
                            {option.Description}
                          </Grid>
                        </Grid>
                      </li>
                    )}
                    renderInput={(params) => <TextField {...params} label="Specimen Type" />}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type='number'
                  label='Specimen Count'

                  // value={formData?.SpecimenCount}
                  onChange={e => handleFormChange('SpecimenCount', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppReactDatepicker
                  boxProps={{ className: 'is-full' }}
                  selected={formData?.CollectedDate || null}
                  dateFormat={'MM/dd/yyyy'}
                  onChange={(date: Date) => handleFormChange('CollectedDate', date)}
                  customInput={<TextField fullWidth label='Collection Date' size='medium' />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TimePicker
                  label="Collection Time"
                  defaultValue={formData?.CollectedTime ? dayjs(formData?.CollectedTime, 'HH:mm A') : null}
                  onChange={(newValue) => {
                    const timeString = newValue ? dayjs(newValue).format('HH:mm A') : '';

                    handleFormChange('CollectedTime', timeString)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Specimen ID'

                  // value={formData?.SpecimenID || ''}
                  onChange={e => handleFormChange('SpecimenID', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Bodysite'

                  // value={formData?.BodySite || ''}
                  onChange={e => handleFormChange('BodySite', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Fixative'

                  // value={formData?.Fixative || ''}
                  onChange={e => handleFormChange('Fixative', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='Fixative Duration'

                  // value={formData?.FixativeDuration || ''}
                  onChange={e => handleFormChange('FixativeDuration', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label='ColdIschemicTime'

                  // value={formData?.ColdIschemicTime || ''}
                  onChange={e => handleFormChange('ColdIschemicTime', e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </div>
        <DialogActions className='gap-2 justify-center pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={() => {
            handleSave(formData || {} as LabOrderSpecimenWithRelations)
            setOpen(false)
          }} type='submit'
          >
            Save
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setFormData({} as LabOrderSpecimenWithRelations)
              setOpen(false)
            }}
            type='button'
          >
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default AddSpecimenDetails
