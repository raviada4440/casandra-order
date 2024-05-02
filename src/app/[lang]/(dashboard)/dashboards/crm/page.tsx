// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
// import Transactions from '@views/dashboards/crm/Transactions'
// import TotalSales from '@views/dashboards/crm/TotalSales'
// import RevenueReport from '@views/dashboards/crm/RevenueReport'
// import CardWidgetsSalesOverview from '@views/dashboards/crm/SalesOverview'
// import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'
// import WeeklySales from '@views/dashboards/crm/WeeklySales'
// import LineAreaChart from '@views/dashboards/crm/LineAreaChart'

import UpgradePlan from '@views/dashboards/crm/UpgradePlan'
import MeetingSchedule from '@views/dashboards/crm/MeetingSchedule'
import DeveloperMeetup from '@views/dashboards/crm/DeveloperMeetup'

// import CardStatVertical from '@/components/card-statistics/Vertical'
// import CardStatWithImage from '@/components/card-statistics/Character'

const DashboardCRM = () => {
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12} sm={6} md={3} className='self-end'>
        <CardStatWithImage
          stats='13k'
          title='Ratings'
          trendNumber='15.6%'
          chipColor='primary'
          src='/images/illustrations/characters/13.png'
          chipText={`Year of ${new Date().getFullYear()}`}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className='self-end'>
        <CardStatWithImage
          stats='24.5k'
          trend='negative'
          title='Sessions'
          trendNumber='20%'
          chipText='Last Week'
          src='/images/illustrations/characters/14.png'
        />
      </Grid>
      <Grid item xs={12} md={6} className='self-end'>
        <Transactions />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TotalSales />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RevenueReport />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardWidgetsSalesOverview />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityTimeline />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={8}>
            <WeeklySales />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={6}>
              <Grid item xs={6} sm={12}>
                <LineAreaChart />
              </Grid>
              <Grid item xs={6} sm={12}>
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
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid item xs={12} sm={6} lg={4}>
        <UpgradePlan />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <MeetingSchedule />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <DeveloperMeetup />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
