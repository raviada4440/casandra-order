
// MUI IMports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// Component Imports
import AutocompleteIcd from '../autocomplete/AutocompleteIcd'

const CptDetails = () => {

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
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default CptDetails
