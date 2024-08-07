// React Imports
import { useContext, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// Styled Component Imports
import uuid from 'react-native-uuid'

import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { LabOrderContext } from '.'




import type { PatientWithRelations, OrganizationWithRelations, ProviderOrganizationPartialRelations } from '~prisma/generated/zod'
import AutocompleteProvider from './AutocompleteProvider'
import AutocompleteFhirPatient from './AutocompleteFhirPatient'
import AutocompletePatient from './AutocompletePatient'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const StepPatientDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {

  // Vars
  const { labOrder, setLabOrder } = useContext(LabOrderContext);
  const patientId = uuid.v4()

  if (!labOrder.Patient) {
    labOrder.Patient = { Id: patientId } as PatientWithRelations
  }

  const [formData, setFormData] = useState<PatientWithRelations>(labOrder?.Patient as PatientWithRelations)
  const { data: session } = useSession()
  const [providerOrgs] = useState<ProviderOrganizationPartialRelations[]>(session?.user.UserAttribute?.Provider?.ProviderOrganization || [])

  // const providerOrgs: ProviderOrganizationPartialRelations[] = session?.user.UserAttribute?.Provider?.ProviderOrganization || []



  // console.log('formData', formData)

  const handleFormChange = (field: keyof PatientWithRelations, value: PatientWithRelations[keyof PatientWithRelations]) => {
    const updatedFormData = { ...formData, [field]: value };

    setFormData(updatedFormData);
    setLabOrder({ ...labOrder, Patient: updatedFormData })
  }

  const handleMRNChange = (value: string) => {
    setLabOrder({ ...labOrder, PatientMRN: value })
  }

  const handleOrgChange = (event: SelectChangeEvent) => {
    // console.log('event.target.value', event.target.value)
    const providerOrg = providerOrgs.find(org => org.Organization?.Id === event.target.value)

    // console.log('providerOrg', providerOrg)

    setLabOrder({ ...labOrder, Organization: providerOrg?.Organization as OrganizationWithRelations })

    // console.log('labOrder', labOrder)
  };

  useEffect(() => {
    if (providerOrgs.length === 1) {
      labOrder.Organization = providerOrgs[0].Organization as OrganizationWithRelations
    }
  }, [labOrder, providerOrgs])

  useEffect(() => {
    if (labOrder?.Patient) {
      setFormData(labOrder.Patient as PatientWithRelations);
    }
  }, [labOrder?.Patient]);

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        {/* <Card className="mb-6">
      <CardContent>
    </CardContent>
    </Card> */}

        <Card>
          <CardContent>

            <div className='flex items-center gap-2 mbe-4'>
              <i className='ri-hospital-line text-3xl text-primary' />
              <Typography variant='h5' className='text-primary'>
                Location & Treating Physician
              </Typography>
            </div>
            <Grid className="mb-6" container spacing={5}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id='select-location'>Location</InputLabel>
                  <Select
                    labelId='select-location'
                    label='Location'
                    defaultValue={providerOrgs.length === 1 ? providerOrgs[0]?.Organization?.Id : ''}
                    onChange={handleOrgChange}>
                    {providerOrgs.map((org: ProviderOrganizationPartialRelations, index) => (
                      <MenuItem key={index} value={org.Organization?.Id}>
                        {org.Organization?.OrgName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <AutocompleteProvider />
              </Grid>
            </Grid>
            {/* <Divider className="mb-6" /> */}

            <div className='flex items-center gap-2 mbe-4'>
              <i className='ri-user-line text-3xl text-primary' />
              <Typography variant='h5' className='text-primary'>
                Patient Demographics
              </Typography>
            </div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                {session?.authProvider === 'credentials' && session?.entryPoint === 'standalone' && (
                  <AutocompletePatient />
                )}
                {(session?.authProvider === 'cerner' || session?.authProvider === 'epic') && session?.entryPoint === 'standalone' && (
                  <AutocompleteFhirPatient />
                )}
                {(session?.authProvider === 'cerner' || session?.authProvider === 'epic') && session?.entryPoint === 'launch' && (
                  <TextField
                    fullWidth
                    label='Last Name'
                    value={formData?.LastName || ''}
                    placeholder='Last Name'
                    onChange={e => handleFormChange('LastName', e.target.value)}
                  />
                )}
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
                <AppReactDatepicker
                  boxProps={{ className: 'is-full' }}
                  selected={formData?.DateOfBirth ? new Date(formData?.DateOfBirth.getTime() + Math.abs(formData?.DateOfBirth.getTimezoneOffset() * 60000)) : null || null}
                  dateFormat={'MM/dd/yyyy'}
                  onChange={(date: Date) => handleFormChange('DateOfBirth', date)}
                  customInput={<TextField fullWidth label='Date Of Birth' size='medium' />}
                />

                {/* <TextField
                fullWidth
                label='Date Of Birth'
                value={formData?.DateOfBirth || ''}
                placeholder='Date Of Birth'
                onChange={e => handleFormChange('DateOfBirth', e.target.value)}
              /> */}
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
                    color='primary'
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
          </CardContent>
        </Card>
      </form>
    </>
  )
}

export default StepPatientDetails
