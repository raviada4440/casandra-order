
import { useContext } from 'react'

// MUI IMports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import AutocompleteIcd from '../autocomplete/AutocompleteIcd'
import { LabOrderContext } from '..'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepIcdDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  const { loading } = useContext(LabOrderContext);

  // Vars
  return (
    <Card>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className='ri-stethoscope-line text-3xl text-primary' />
          <Typography variant='h5' className='text-primary'>
            Clinical
          </Typography>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              <AutocompleteIcd />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                rows={4}
                multiline
                fullWidth
                label='Notes'
                placeholder='Comments' />
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
                  { loading && <CircularProgress color="inherit" size={20} /> }
                  { activeStep === steps.length - 1 ? 'Submit' : 'Next' }
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default StepIcdDetails
