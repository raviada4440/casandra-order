// Type Imports
import type { CardStatsType } from '@/types/pages/widgetTypes'

export const db: CardStatsType = {
  statsHorizontal: [
    {
      stats: '2,856',
      trendNumber: '10.2%',
      color: 'primary',
      title: 'New Customers',
      icon: 'ri-group-line'
    },
    {
      stats: '28.6K',
      trend: 'up',
      color: 'success',
      trendNumber: '25.8%',
      title: 'Total Revenue',
      icon: 'ri-money-dollar-circle-line '
    },
    {
      color: 'info',
      stats: '16.6K',
      trendNumber: '12.1%',
      title: 'New Transactions',
      icon: 'ri-pie-chart-2-line'
    },
    {
      stats: '2,856',
      trend: 'up',
      color: 'warning',
      icon: 'ri-bar-chart-line',
      trendNumber: '54.6%',
      title: 'Total Profit'
    }
  ],
  statsVertical: [
    {
      stats: '862',
      trend: 'negative',
      trendNumber: '18%',
      title: 'New Project',
      subtitle: 'Yearly Project',
      avatarColor: 'primary',
      avatarIcon: 'ri-file-word-2-line'
    },
    {
      avatarIcon: 'ri-pie-chart-2-line ',
      stats: '$25.6k',
      avatarColor: 'secondary',
      trendNumber: '42%',
      title: 'Total Profit',
      subtitle: 'Weekly Profit'
    },
    {
      stats: '$95.2k',
      title: 'Revenue',
      avatarColor: 'success',
      trendNumber: '12%',
      avatarIcon: 'ri-money-dollar-circle-line',
      subtitle: 'Revenue Increase'
    },
    {
      avatarColor: 'error',
      stats: '44.10k',
      trend: 'negative',
      title: 'Logistics',
      trendNumber: '42%',
      avatarIcon: 'ri-car-line',
      subtitle: 'Regional Logistics'
    },
    {
      stats: '268',
      title: 'Reports',
      avatarColor: 'warning',
      trend: 'negative',
      trendNumber: '28%',
      avatarIcon: 'ri-file-chart-line',
      subtitle: 'System Bugs'
    },
    {
      stats: '1.2k',
      avatarColor: 'info',
      trendNumber: '38%',
      title: 'Transactions',
      avatarIcon: 'ri-bank-card-line',
      subtitle: 'Daily Transactions'
    }
  ],
  statsCharacter: [
    {
      stats: '13k',
      title: 'Ratings',
      trendNumber: '15.6%',
      chipColor: 'primary',
      src: '/images/illustrations/characters/13.png',
      chipText: `Year of ${new Date().getFullYear()}`
    },
    {
      stats: '24k',
      trend: 'negative',
      title: 'Sessions',
      trendNumber: '20%',
      chipText: 'Last Week',
      src: '/images/illustrations/characters/14.png'
    },
    {
      stats: '28k',
      chipColor: 'info',
      title: 'Customers',
      trendNumber: '59%',
      chipText: 'Daily Customers',
      src: '/images/illustrations/characters/15.png'
    },
    {
      stats: '42k',
      trendNumber: '26%',
      chipColor: 'warning',
      title: 'Total Orders',
      chipText: 'Last Month',
      src: '/images/illustrations/characters/16.png'
    }
  ]
}
