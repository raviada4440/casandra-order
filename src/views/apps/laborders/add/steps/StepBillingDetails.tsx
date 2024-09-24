import { useContext, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

import Button from '@mui/material/Button'

import uuid from 'react-native-uuid'

// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { LabOrderContext } from '..'
import type { LabOrderBillingWithRelations } from '~prisma/generated/zod'
import CptDetails from './CptDetails'


type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepBillingDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // Vars
  const { labOrder, setLabOrder, loading } = useContext(LabOrderContext);
  const billingId = uuid.v4()

  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  if (!labOrder.LabOrderBilling) {
    labOrder.LabOrderBilling = [{ Id: billingId }] as LabOrderBillingWithRelations[]
  }

  const [formData, setFormData] = useState<LabOrderBillingWithRelations>(labOrder?.LabOrderBilling[0] as LabOrderBillingWithRelations)


  const handleFormChange = (field: keyof LabOrderBillingWithRelations, value: LabOrderBillingWithRelations[keyof LabOrderBillingWithRelations]) => {
    const updatedFormData = { ...formData, [field]: value };

    setFormData(updatedFormData);
    setLabOrder({ ...labOrder, LabOrderBilling: [updatedFormData] })
  }


  return (
    <>
      <form onSubmit={e => e.preventDefault()}>


        <Card>
          <CardContent>
            <div className='flex items-center gap-2 mbe-4'>
              <i className='ri-user-line text-3xl text-primary' />
              <Typography variant='h5' className='text-primary'>
                Billing
              </Typography>
            </div>
            <TabContext value={value}>
              <div className='flex flex-col gap-2 mt-4'>
                <TabList variant="fullWidth" onChange={handleChange} aria-label='vertical tabs example'>
                  <Tab value='1' icon={<i className='ri-test-tube-line text-3xl text-primary' />} label='Billing Details' />
                  <Tab value='2' icon={<i className='ri-building-4-line text-3xl text-primary' />} label='CPT / ICD Codes' />
                </TabList>
                <TabPanel sx={{ width: '100%' }} value='1'>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id='select-billto'>Bill To</InputLabel>
                        <Select
                          id='billto-select'
                          label='Bill To'
                          labelId='select-billto'
                          value={formData?.BillToId || ''}
                          onChange={e => handleFormChange('BillToId', e.target.value)}
                        >
                          <MenuItem value='ins'>Insurance</MenuItem>
                          <MenuItem value='self'>Patient</MenuItem>
                          <MenuItem value='pharma'>Pharma</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id='select-patientstatus'>Patient Status</InputLabel>
                        <Select
                          id='patientstatus-select'
                          label='Patient Status'
                          labelId='select-patientstatus'
                          value={formData?.PatientStatus || ''}
                          onChange={e => handleFormChange('PatientStatus', e.target.value)}
                        >
                          <MenuItem value='inpatient'>Outpatient</MenuItem>
                          <MenuItem value='inpatient'>Hospital Inpatient</MenuItem>
                          <MenuItem value='hchb'>Home Care</MenuItem>
                          <MenuItem value='longterm'>Longterm Care</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <FormControl fullWidth>
                        <InputLabel id='select-healthplan'>Health Plan</InputLabel>
                        <Select
                          id='healthplan-select'
                          label='Health Plan'
                          labelId='select-healthplan'
                          value={formData?.HealthPalnId || ''}
                          onChange={e => handleFormChange('HealthPalnId', e.target.value)}
                        >
                          <MenuItem value='bcbsnc'>BCBS of North Carolina</MenuItem>
                          <MenuItem value='bcbstx'>BCBS of Texas</MenuItem>
                          <MenuItem value='aetna'>Aetna CVS</MenuItem>
                          <MenuItem value='united'>United Healthcare</MenuItem>
                          <MenuItem value='ambetter'>Ambetter</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label='Subscriber ID'
                        value={formData?.SubscriberId || ''}
                        placeholder='Subscriber ID'
                        onChange={e => handleFormChange('SubscriberId', e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel sx={{ width: '100%' }} value='2'>
                  <CptDetails />
                </TabPanel>
              </div>
            </TabContext>
            <Grid container spacing={5}>
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
                    { loading && <CircularProgress color="inherit" size={20} /> }
                    { activeStep === steps.length - 1 ? 'Submit' : 'Next' }
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

export default StepBillingDetails
