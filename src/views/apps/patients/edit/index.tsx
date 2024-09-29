'use client'

// React Imports
import { createContext, useEffect, useState, useContext } from 'react'
import type { SyntheticEvent } from 'react'

import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'
import type { PatientWithRelations } from '~prisma/generated/zod'
import PatientNameCard from './PatientCard'


type PatientDataContextType = {
  patientData: PatientWithRelations
};

// Step 1: Create a new context
const PatientDataContext = createContext<PatientDataContextType>({} as PatientDataContextType)

export const usePatientData = () => useContext(PatientDataContext)

const PatientDetails = ({ patientData }: { patientData: PatientWithRelations }) => {
  // States
  const [activeTab, setActiveTab] = useState('overview')
  const [tabContentList, setTabContentList] = useState({});

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  useEffect(() => {
    const loadTabContent = async () => {
      const OverviewTab = dynamic(() => import('@/views/apps/patients/edit/overview'))
      const OrganizationTab = dynamic(() => import('@/views/apps/patients/edit/organization'))
      const LabOrdersTab = dynamic(() => import('@/views/apps/patients/edit/lab-orders'))

      setTabContentList({
        overview: <OverviewTab />,
        organization: <OrganizationTab />,
        labOrders: <LabOrdersTab />,
      });
    };

    loadTabContent();
  }, []);


  return (
    <PatientDataContext.Provider value={{ patientData }}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <PatientNameCard />
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
                      Organization
                    </div>}
                    value='specimen' />
                  <Tab
                    label={<div className='flex items-center gap-1.5'>
                      <i className='ri-bookmark-line text-lg' />
                      Lab Orders
                    </div>}
                    value='cpt' />
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
    </PatientDataContext.Provider>
  )
}

export default PatientDetails
