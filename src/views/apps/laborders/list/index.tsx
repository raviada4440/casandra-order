'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
// import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import LabOrderListTable from './LabOrderListTable'
import LabOrderCard from './LabOrderCard'
import type { CustomLabOrderType } from '@server/api/routers/laborder'
import { useSettings } from '@core/hooks/useSettings'


const LabOrderList = ({ labOrdersData, totalOrdersInTransit, totalIncompleteOrders }: { labOrdersData: CustomLabOrderType[], totalOrdersInTransit: number; totalIncompleteOrders: number }) => {

  const { settings } = useSettings()

  console.log('settings.columnFilters: ', settings.columnFilters)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <LabOrderCard totalOrdersInTransit={totalOrdersInTransit} totalIncompleteOrders={totalIncompleteOrders} />
      </Grid>
      <Grid item xs={12}>
        <LabOrderListTable labOrdersData={labOrdersData} columnFiltersData={settings.columnFilters || []} />
      </Grid>
    </Grid>
  )
}

export default LabOrderList
