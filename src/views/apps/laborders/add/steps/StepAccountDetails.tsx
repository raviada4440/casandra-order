// React Imports
import { useContext, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// Styled Component Imports
import uuid from 'react-native-uuid'

// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'




import type { PatientWithRelations, OrganizationWithRelations, ProviderOrganizationPartialRelations } from '~prisma/generated/zod'
import AutocompleteProvider from '../autocomplete/AutocompleteProvider'
import { LabOrderContext } from '..'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const StepAccountDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {

  // Vars
  const { labOrder, setLabOrder } = useContext(LabOrderContext);
  const patientId = uuid.v4()

  if (!labOrder.Patient) {
    labOrder.Patient = { Id: patientId } as PatientWithRelations
  }

  const { data: session } = useSession()
  const [providerOrgs] = useState<ProviderOrganizationPartialRelations[]>(session?.user.UserAttribute?.Provider?.ProviderOrganization || [])

  // const providerOrgs: ProviderOrganizationPartialRelations[] = session?.user.UserAttribute?.Provider?.ProviderOrganization || []



  // console.log('formData', formData)

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

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <Card>
          <CardContent>

            <div className='flex items-center gap-2 mbe-4'>
              <i className='ri-hospital-line text-3xl text-primary' />
              <Typography variant='h5' className='text-primary'>
                Treating Physician & Location
              </Typography>
            </div>
            <Grid className="mb-6" container spacing={5}>
              <Grid item xs={12}>
                <AutocompleteProvider />
              </Grid>
              <Grid item xs={12}>
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
          </CardContent>
        </Card>
      </form>
    </>
  )
}

export default StepAccountDetails
