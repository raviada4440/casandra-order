// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import BiomarkerCard from './BiomarkerCard'


const Biomarkers = () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <BiomarkerCard />
      </Grid>
    </Grid>
  )
}

export default Biomarkers
