// Component Imports

import LabOrderList from '@/views/apps/laborders/list'
import { api } from '~trpc/server'

import type { CustomLabOrderType } from '@server/api/routers/laborder';


const InvoiceApp = async () => {


  const labOrdersData: CustomLabOrderType[] = await api.laborders.getLabOrders.query()
  const totalOrdersInTransit = await api.laborders.getNotResultedLabOrders.query()
  const totalIncompleteOrders = await api.laborders.getIncompleteOrders.query()


  return <LabOrderList labOrdersData={labOrdersData} totalOrdersInTransit={totalOrdersInTransit} totalIncompleteOrders={totalIncompleteOrders} />
}

export default InvoiceApp
