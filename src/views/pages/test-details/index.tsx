'use client'

// React Imports
import { createContext, useContext, useEffect, useState } from 'react'
import type { SyntheticEvent } from 'react'

import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'
import TestNameCard from './TestNameCard'
import type { Lab, TestCatalogPartialWithRelations } from '~prisma/generated/zod'


type TestDataContextType = {
  testData: TestCatalogPartialWithRelations
  labsData: Lab[]
};

// Step 1: Create a new context
const TestDataContext = createContext<TestDataContextType>({} as TestDataContextType)

// Use this custom hook in child components to access filteredData
export const useTestData = () => useContext(TestDataContext)

const TestDetails = ({ testData, labsData }: { testData: TestCatalogPartialWithRelations; labsData: Lab[] }) => {
  // States
  const [activeTab, setActiveTab] = useState('overview')
  const [tabContentList, setTabContentList] = useState({});

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  useEffect(() => {
    const loadTabContent = async () => {
      const OverviewTab = dynamic(() => import('@/views/pages/test-details/overview'))
      const SpecimenTab = dynamic(() => import('@/views/pages/test-details/specimen'))
      const CptCodesTab = dynamic(() => import('@/views/pages/test-details/cpt-codes'))
      const LoincCodesTab = dynamic(() => import('@/views/pages/test-details/loinc-codes'))
      const BiomarkersTab = dynamic(() => import('@/views/pages/test-details/biomarkers'))

      setTabContentList({
        overview: <OverviewTab />,
        specimen: <SpecimenTab  />,
        cpt: <CptCodesTab />,
        loinc: <LoincCodesTab  />,
        biomarker: <BiomarkersTab />
      });
    };

    loadTabContent();
  }, []);


  return (
    <TestDataContext.Provider value={{ testData, labsData}}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TestNameCard />
        </Grid>
        <Grid item xs={12}>
          <TabContext value={activeTab}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
                  <Tab
                    label={<div className='flex items-center gap-1.5'>
                      <i className='ri-group-line text-lg' />
                      Overview
                    </div>}
                    value='overview' />
                  <Tab
                    label={<div className='flex items-center gap-1.5'>
                      <i className='ri-lock-unlock-line text-lg' />
                      Specimen
                    </div>}
                    value='specimen' />
                  <Tab
                    label={<div className='flex items-center gap-1.5'>
                      <i className='ri-bookmark-line text-lg' />
                      CPT Codes
                    </div>}
                    value='cpt' />
                  <Tab
                    label={<div className='flex items-center gap-1.5'>
                      <i className='ri-notification-3-line text-lg' />
                      LOINC Codes
                    </div>}
                    value='loinc' />
                  <Tab
                    label={<div className='flex items-center gap-1.5'>
                      <i className='ri-link text-lg' />
                      Biomarkers
                    </div>}
                    value='biomarker' />
                </CustomTabList>
              </Grid>
              <Grid item xs={12}>
                <TabPanel value={activeTab} className='p-0'>
                  {tabContentList[activeTab as keyof typeof tabContentList]}
                </TabPanel>
              </Grid>
            </Grid>
          </TabContext>
        </Grid>
      </Grid>
    </TestDataContext.Provider>
  )
}

export default TestDetails
