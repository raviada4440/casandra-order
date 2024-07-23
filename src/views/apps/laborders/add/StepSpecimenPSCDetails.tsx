// React Imports
import { useContext, useEffect, useState } from 'react'

// import { useSession } from 'next-auth/react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { LabOrderContext } from '.'




import type { LabOrderSpecimenWithRelations } from '~prisma/generated/zod'
import AutocompleteAddress from './AutocompleteAddress'
import states from '../../../../data/states'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const StepSpecimenPSCDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {

  // Vars
  const { labOrder, setLabOrder } = useContext(LabOrderContext);
  const [formData, setFormData] = useState<LabOrderSpecimenWithRelations>(labOrder?.LabOrderSpecimen?.[0] as LabOrderSpecimenWithRelations)

  // const { data: session } = useSession()

  const handleFormChange = (field: keyof LabOrderSpecimenWithRelations, value: LabOrderSpecimenWithRelations[keyof LabOrderSpecimenWithRelations]) => {
    const updatedFormData = { ...formData, [field]: value };

    setFormData(updatedFormData as LabOrderSpecimenWithRelations);
    setLabOrder({ ...labOrder, LabOrderSpecimen: [updatedFormData] })
  }

  useEffect(() => {
    if(labOrder?.LabOrderSpecimen?.[0]) {
      setFormData(labOrder?.LabOrderSpecimen?.[0] as LabOrderSpecimenWithRelations)
    }
  }, [labOrder, setFormData])

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <Card>
          <CardContent>

            <div className='flex items-center gap-2 mbe-4'>
              <i className='ri-user-line text-3xl text-primary' />
              <Typography variant='h5' className='text-primary'>
                Schedule An Appointment At Patient Service Center
              </Typography>
            </div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12}>
                <Typography variant='h5' className='text-primary'>
                  This test requires a blood draw. Please select a Patient Service Center (PSC) location to schedule an appointment.
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='h6' className='text-secondary'>
                  At this point, there is no API to fetch the PSC locations. So, we are using a dummy data for the same.
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
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

export default StepSpecimenPSCDetails
