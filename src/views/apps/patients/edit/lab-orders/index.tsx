// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CptCodesCard from './LabOrderCard'


const CptCodes = () => {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CptCodesCard />
      </Grid>
    </Grid>
  )
}

export default CptCodes
