// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports

import OrderLoincCard from './OrderLoincCard';
import ResultLoincCard from './ResultLoincCard';

const LoincCodes = () => {

  return (
    <Grid container spacing={12}>
      <Grid item sm={12}>
        <OrderLoincCard />
      </Grid>
      <Grid item sm={12}>
        <ResultLoincCard />
      </Grid>
    </Grid>
  )
}

export default LoincCodes
