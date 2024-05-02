'use client'

// Next Imports
import dynamic from 'next/dynamic'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [
  {
    data: [30, 60, 36, 68]
  }
]

const LineChartWithShadow = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const primaryColor = theme.palette.primary.main

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 12,
        blur: 3,
        left: 3,
        enabled: true,
        opacity: 0.14,
        color: primaryColor
      }
    },
    grid: {
      show: false,
      padding: {
        left: -5,
        top: -10
      }
    },
    tooltip: { enabled: false },
    colors: [primaryColor],
    markers: {
      size: 6,
      offsetX: -2,
      offsetY: -1,
      strokeWidth: 5,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 7,
          seriesIndex: 0,
          strokeColor: primaryColor,
          fillColor: theme.palette.background.paper,
          dataPointIndex: series[0].data.length - 1
        }
      ]
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      lineCap: 'round'
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>$35.4k</Typography>
        <AppReactApexCharts type='line' height={116} width='100%' options={options} series={series} />
        <Typography color='text.primary' className='font-medium text-center'>
          Total Revenue
        </Typography>
      </CardContent>
    </Card>
  )
}

export default LineChartWithShadow
