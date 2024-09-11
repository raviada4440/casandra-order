// React Imports
import type { SyntheticEvent} from 'react';
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
import { DialogActions, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import { TimePicker } from '@mui/x-date-pickers'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

import dayjs from 'dayjs'

// Styled Component Imports

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import type { LabOrderSpecimenWithRelations } from '~prisma/generated/zod'
import { LabOrderContext } from '..'
import states from '../../../../../data/states'

const specimenTypes = [
  {
    Name: 'Blood',
    Description: 'Blood, plasma, serum, red blood cells'
  },
  {
    Name: 'Plasma, frozen',
    Description: 'Frozen plasma'
  },
  {
    Name: 'FFPE Tissue',
    Description: 'Formalin-fixed paraffin-embedded tissue'
  },
  {
    Name: 'Bone Marrow',
    Description: 'Bone Marrow'
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

  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

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
        <TabContext value={value}>
          <div className='flex flex-col gap-2 mt-4'>

            <form onSubmit={e => e.preventDefault()}>
                <TabList variant="fullWidth" onChange={handleChange} aria-label='vertical tabs example'>
                  <Tab value='1' icon={<i className='ri-test-tube-line text-3xl text-primary' />} label='Specimen Information' />
                  <Tab value='2' icon={<i className='ri-building-4-line text-3xl text-primary' />} label='3rd Party Specimen Location' />
                </TabList>
                <TabPanel sx={{ width: '100%' }} value='1'>
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
                    {/* <Grid item xs={12} md={6}>
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
                    </Grid> */}
                  </Grid>
                </TabPanel>
                <TabPanel sx={{ width: '100%' }} value='2'>
                  <div className='flex items-center gap-2 mbe-4'>
                    <Typography variant='h6' className='text-primary'>
                      Complete the following so that our client services will request specimen from
                      pathology site
                    </Typography>
                  </div>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={12}>
                      <TextField
                          fullWidth
                          label='Location of Specimen'
                          value={formData?.SpecimenLocation || ''}
                          placeholder='Location of Specimen'
                          onChange={e => handleFormChange('SpecimenLocation', e.target.value)}
                        />
                    </Grid>
                    {/* <Grid item xs={12} md={12}>
                      <AutocompleteSpecimenAddress />
                    </Grid> */}
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        value={formData?.SpecimenAddress1 || ''}
                        placeholder='Street Address'
                        onChange={e => handleFormChange('SpecimenAddress1', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        value={formData?.SpecimenCity}
                        placeholder='City'
                        onChange={e => handleFormChange('SpecimenCity', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControl fullWidth>
                        <InputLabel id='select-state'>State</InputLabel>
                        <Select
                          id='state-select'
                          labelId='select-state'
                          value={formData?.SpecimenState || ''}
                          onChange={e => handleFormChange('SpecimenState', e.target.value)}
                        >
                          {states.map((state, index) => (
                            <MenuItem key={index} value={state.code}>
                              {state.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        value={formData?.SpecimenZip}
                        placeholder='Zip Code'
                        onChange={e => handleFormChange('SpecimenZip', e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
            </form>
          </div>
        </TabContext>
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
