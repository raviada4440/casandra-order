// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import OrganizationCard from './OrganizationCard'

const Organization = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <OrganizationCard />
      </Grid>
    </Grid>
  )
}

export default Organization
