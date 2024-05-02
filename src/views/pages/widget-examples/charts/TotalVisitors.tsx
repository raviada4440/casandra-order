'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import OptionsMenu from '@core/components/option-menu'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const TotalVisitors = () => {
  // Hooks
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? systemMode : mode) || 'light'
  const textSecondary = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    colors: [
      theme.palette.primary.main,
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.7)`),
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.5)`),
      theme.palette.customColors.trackBg
    ],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: {
      show: true,
      fontSize: '13px',
      position: 'bottom',
      labels: { colors: textSecondary },
      markers: {
        height: 10,
        width: 10,
        offsetX: theme.direction === 'rtl' ? 5 : -2
      },
      itemMargin: { horizontal: 9 }
    },
    labels: ['FR', 'UK', 'ESP', 'USA'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              fontSize: '0.9375rem',
              color: textSecondary
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              fontSize: '24px',
              formatter: value => `${value}k`,
              color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`)
            },
            total: {
              show: true,
              fontSize: '0.9375rem',
              label: 'Weekly Visits',
              color: textSecondary,
              formatter: value => `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}k`
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: {
            height: 333
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Total Visitors'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Refresh', 'Update', 'Delete']} />}
      />
      <CardContent>
        <AppReactApexCharts type='donut' height={292} width='100%' series={[12, 25, 13, 50]} options={options} />
      </CardContent>
    </Card>
  )
}

export default TotalVisitors
