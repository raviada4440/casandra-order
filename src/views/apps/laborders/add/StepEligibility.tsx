// React Imports
import { useContext, useEffect, useState } from 'react'

import uuid from 'react-native-uuid'

// import { useSession } from 'next-auth/react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// import type { SelectChangeEvent } from '@mui/material/Select';

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { LabOrderContext } from '.'



import type { LabOrderSponsoredTestConsentWithRelations, SponsoredTestWithRelations } from '~prisma/generated/zod'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const StepEligibility = ({ activeStep, handleNext, handlePrev, steps }: Props) => {

  // Vars
  const { labOrder, setLabOrder } = useContext(LabOrderContext);
  const [formData, setFormData] = useState<LabOrderSponsoredTestConsentWithRelations>(labOrder?.LabOrderSponsoredTestConsent?.[0] || { Id: uuid.v4() as string, LabOrderId: labOrder.Id } as LabOrderSponsoredTestConsentWithRelations)

  // const [htmlContent, setHtmlContent] = useState('');

  // console.log('formData.', (formData?.SponsoredTest && formData?.SponsoredTest?.[0].SponsoredProgram?.ProgramEligibility) || '')


  //const { data: session } = useSession()

  const handleFormChange = (field: keyof LabOrderSponsoredTestConsentWithRelations, value: LabOrderSponsoredTestConsentWithRelations[keyof LabOrderSponsoredTestConsentWithRelations]) => {
    const updatedFormData = { ...formData, [field]: value };

    setFormData(updatedFormData);
    setLabOrder({ ...labOrder, LabOrderSponsoredTestConsent: [...labOrder.LabOrderSponsoredTestConsent, updatedFormData] })
  }

  // const handleMRNChange = (value: string) => {
  //   setLabOrder({ ...labOrder, PatientMRN: value })
  // }

  // const handleOrgChange = (event: SelectChangeEvent) => {
  //   // console.log('event.target.value', event.target.value)
  //   const providerOrg = providerOrgs.find(org => org.Organization?.Id === event.target.value)

  //   // console.log('providerOrg', providerOrg)

  //   // setLabOrder({...labOrder, Organization: providerOrg?.Organization as OrganizationWithRelations })

  //   // console.log('labOrder', labOrder)
  // };
  // // console.log('formData?.SponsoredTest?.SponsoredProgram?.ProgramEligibility: ', formData?.SponsoredTest[0]?.SponsoredProgram?.ProgramEligibility)

  useEffect(() => {
    if (labOrder?.LabOrderSponsoredTestConsent && labOrder?.LabOrderSponsoredTestConsent.length > 0) {
      setFormData({ ...labOrder.LabOrderSponsoredTestConsent[0] } as LabOrderSponsoredTestConsentWithRelations)

      const labOrderSponsoredTestConsent: LabOrderSponsoredTestConsentWithRelations = labOrder.LabOrderSponsoredTestConsent[0] as LabOrderSponsoredTestConsentWithRelations

      if (labOrderSponsoredTestConsent.SponsoredTest) {
        const sponsoredTest: SponsoredTestWithRelations = labOrderSponsoredTestConsent.SponsoredTest

        if (sponsoredTest && sponsoredTest.SponsoredProgram && sponsoredTest.SponsoredProgram.ProgramEligibility) {
          // console.log('sponsoredTest.SponsoredProgram.ProgramEligibility: ', sponsoredTest.SponsoredProgram.ProgramEligibility)
        }
      }
    }
  }, [labOrder?.LabOrderSponsoredTestConsent])

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
              <i className='ri-user-line text-3xl text-primary' />
              <Typography variant='h5' className='text-primary'>
                Program Elibility Criteria
              </Typography>
            </div>
            <Grid container spacing={5}>

              <Grid item xs={12} md={12}>
                <div dangerouslySetInnerHTML={{ __html: formData?.SponsoredTest && formData.SponsoredTest?.[0]?.SponsoredProgram?.ProgramEligibility }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label='ProviderName'
                  value={formData?.ProviderName || ''}
                  placeholder='ProviderName'
                  onChange={e => handleFormChange('ProviderName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label='ProviderNPI'
                  value={formData?.ProviderNPI || ''}
                  placeholder='ProviderNPI'
                  onChange={e => handleFormChange('ProviderNPI', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <AppReactDatepicker
                  boxProps={{ className: 'is-full' }}
                  selected={formData?.ConsentAt || null}
                  dateFormat={'MM/dd/yyyy'}
                  onChange={(date: Date) => handleFormChange('ConsentAt', date)}
                  customInput={<TextField fullWidth label='Date & Time' size='medium' />}
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
          </CardContent>
        </Card>
      </form>
    </>
  )
}

export default StepEligibility
