// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProfitStackedBar from '@views/pages/widget-examples/charts/TotalProfitStackedBar'
import TotalVisitors from '@views/pages/widget-examples/charts/TotalVisitors'
import WeeklySales from '@views/pages/widget-examples/charts/WeeklySales'
import TotalRevenue from '@views/pages/widget-examples/charts/TotalRevenue'
import WeeklyOverview from '@views/pages/widget-examples/charts/WeeklyOverview'
import Performance from '@views/pages/widget-examples/charts/Performance'
import Analytics from '@views/pages/widget-examples/charts/Analytics'
import SalesState from '@views/pages/widget-examples/charts/SalesState'
import TotalProfitRadialBar from '@views/pages/widget-examples/charts/TotalProfitRadialBar'
import TotalSales from '@views/pages/widget-examples/charts/TotalSales'
import TotalVisits from '@views/pages/widget-examples/charts/TotalVisits'
import RevenueReport from '@views/pages/widget-examples/charts/RevenueReport'
import ActivityTimeline from '@views/pages/widget-examples/charts/ActivityTimeline'
import SalesOverview from '@views/pages/widget-examples/charts/SalesOverview'

const Charts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8}>
        <ProfitStackedBar />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TotalVisitors />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <WeeklySales />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <TotalRevenue />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <WeeklyOverview />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Performance />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Analytics />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <SalesState />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TotalProfitRadialBar />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TotalSales />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TotalVisits />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <RevenueReport />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityTimeline />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SalesOverview />
      </Grid>
    </Grid>
  )
}

export default Charts
