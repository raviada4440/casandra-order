// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Transactions from '@views/pages/widget-examples/advanced/Transactions'
import UpgradePlan from '@views/pages/widget-examples/advanced/UpgradePlan'
import MeetingSchedule from '@views/pages/widget-examples/advanced/MeetingSchedule'
import TeamMembers from '@views/pages/widget-examples/advanced/TeamMembers'
import SalesByCountries from '@views/pages/widget-examples/advanced/SalesByCountries'
import DepositWithdraw from '@views/pages/widget-examples/advanced/DepositWithdraw'
import TotalEarning from '@views/pages/widget-examples/advanced/TotalEarning'
import FinanceSummary from '@views/pages/widget-examples/advanced/FinanceSummary'
import Analytics from '@views/pages/widget-examples/advanced/Analytics'
import WebsiteStatistics from '@views/pages/widget-examples/advanced/WebsiteStatistics'
import DeveloperMeetup from '@views/pages/widget-examples/advanced/DeveloperMeetup'
import ActivityTimeline from '@views/pages/widget-examples/advanced/ActivityTimeline'
import CafeBadilico from '@views/pages/widget-examples/advanced/CafeBadilico'

const Advanced = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={4}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <UpgradePlan />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MeetingSchedule />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <TeamMembers />
      </Grid>
      <Grid item xs={12} lg={7}>
        <DepositWithdraw />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} md={6} lg={5} xl={4}>
        <FinanceSummary />
      </Grid>
      <Grid item xs={12} md={6} lg={3} xl={4}>
        <Analytics />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WebsiteStatistics />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <DeveloperMeetup />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <ActivityTimeline />
      </Grid>
      <Grid item md={6} lg={4}>
        <CafeBadilico />
      </Grid>
    </Grid>
  )
}

export default Advanced
