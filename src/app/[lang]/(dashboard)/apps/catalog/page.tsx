// Component Imports

import CatalogList from '@/views/apps/catalog/list'
import { api } from '~trpc/server'

import type { CustomCatalogType } from '@server/api/routers/testcatalog';

import type { Lab } from '~prisma/generated/zod'



const InvoiceApp = async () => {


  const catalogData: CustomCatalogType[] = await api.testcatalog.getLatest.query()
  const labsData: Lab[] = await api.testcatalog.getLabs.query()
  const noOfCatalogs = (await api.testcatalog.getNumberOfCatalogs.query()).length
  const totalTests = await api.testcatalog.getTotalTests.query()
  const testsWithOrderloinc = await api.testcatalog.getTestCountWithOrderLoinc.query()


  return <CatalogList catalogData={catalogData} noOfLabs={labsData.length} noOfCatalogs={noOfCatalogs} totalTests={totalTests} testsWithOrderloinc={testsWithOrderloinc} />
}

export default InvoiceApp
