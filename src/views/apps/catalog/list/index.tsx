'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
// import type { InvoiceType } from '@/types/apps/invoiceTypes'

// Component Imports
import CatalogListTable from './CatalogListTable'
import CatalogCard from './CatalogCard'
import type { CustomCatalogType } from '@server/api/routers/testcatalog'
import { useSettings } from '@core/hooks/useSettings'


const CatalogList = ({ catalogData, noOfLabs, noOfCatalogs, totalTests, testsWithOrderloinc }: { catalogData: CustomCatalogType[], noOfLabs: number; noOfCatalogs: number; totalTests: number; testsWithOrderloinc: number }) => {

  const { settings } = useSettings()
  
  console.log('settings.columnFilters: ', settings.columnFilters)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CatalogCard labs={noOfLabs} noOfCatalogs={noOfCatalogs} totalTests={totalTests} testsWithOrderloinc={testsWithOrderloinc} />
      </Grid>
      <Grid item xs={12}>
        <CatalogListTable catalogData={catalogData} columnFiltersData={settings.columnFilters || []}/>
      </Grid>
    </Grid>
  )
}

export default CatalogList
