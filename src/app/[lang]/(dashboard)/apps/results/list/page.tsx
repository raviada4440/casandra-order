// Component Imports

import ResultList from '@/views/apps/laborders/list'
import { api } from '~trpc/server'

import type { CustomResultType } from '@server/api/routers/laborder';


const Results = async () => {


  const labOrdersData: CustomResultType[] = await api.laborders.getResults.query()
  const totalOrdersInTransit = await api.laborders.getNotResultedResults.query()
  const totalIncompleteOrders = await api.laborders.getIncompleteOrders.query()


  return <ResultList labOrdersData={labOrdersData} totalOrdersInTransit={totalOrdersInTransit} totalIncompleteOrders={totalIncompleteOrders} />
}

export default Results
