// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Award from '@views/dashboards/analytics/Award'
import Transactions from '@views/dashboards/analytics/Transactions'
import WeeklyOverview from '@views/dashboards/analytics/WeeklyOverview'
import TotalEarning from '@views/dashboards/analytics/TotalEarning'
import LineChart from '@views/dashboards/analytics/LineChart'
import DistributedColumnChart from '@views/dashboards/analytics/DistributedColumnChart'
import Performance from '@views/dashboards/analytics/Performance'
import DepositWithdraw from '@views/dashboards/analytics/DepositWithdraw'
import SalesByCountries from '@views/dashboards/analytics/SalesByCountries'

import Table from '@views/dashboards/analytics/Table'

import CardStatVertical from '@/components/card-statistics/Vertical'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WeeklyOverview />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Total Profit'
              stats='$25.6k'
              avatarIcon='ri-pie-chart-2-line'
              avatarColor='secondary'
              subtitle='Weekly Profit'
              trendNumber='42%'
              trend='positive'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              stats='862'
              trend='negative'
              trendNumber='18%'
              title='New Project'
              subtitle='Yearly Project'
              avatarColor='primary'
              avatarIcon='ri-file-word-2-line'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DistributedColumnChart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Performance />
      </Grid>
      <Grid item xs={12} lg={8}>
        <DepositWithdraw />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
