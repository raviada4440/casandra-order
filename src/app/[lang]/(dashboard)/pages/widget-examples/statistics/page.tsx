// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { CardStatsType } from '@/types/pages/widgetTypes'

// Components Imports
import Transactions from '@views/pages/widget-examples/statistics/Transactions'
import TotalSales from '@views/pages/widget-examples/statistics/TotalSales'
import Horizontal from '@views/pages/widget-examples/statistics/Horizontal'
import Vertical from '@views/pages/widget-examples/statistics/Vertical'
import Character from '@views/pages/widget-examples/statistics/Character'
import LineChartWithShadow from '@views/pages/widget-examples/statistics/LineChartWithShadow'
import BarChartWithNegativeValues from '@views/pages/widget-examples/statistics/BarChartWithNegativeValues'
import LineAreaChart from '@views/pages/widget-examples/statistics/LineAreaChart'
import RadialBarChart from '@views/pages/widget-examples/statistics/RadialBarChart'
import DistributedColumnChart from '@views/pages/widget-examples/statistics/DistributedColumnChart'
import LineChart from '@views/pages/widget-examples/statistics/LineChart'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch permissions data')
  }

  return res.json()
}

const Statistics = async () => {
  // Vars
  const data: CardStatsType = await getData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Horizontal data={data.statsHorizontal} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={4}>
        <TotalSales />
      </Grid>
      <Grid item xs={12}>
        <Vertical data={data.statsVertical} />
      </Grid>
      <Grid item xs={12}>
        <Character data={data.statsCharacter} />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <LineChartWithShadow />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <BarChartWithNegativeValues />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <LineAreaChart />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <RadialBarChart />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <DistributedColumnChart />
      </Grid>
      <Grid item xs={12} sm={4} xl={2}>
        <LineChart />
      </Grid>
    </Grid>
  )
}

export default Statistics
