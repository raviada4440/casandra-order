'use client'

// React Imports
import type { Dispatch, SetStateAction} from 'react';
import { createContext, useEffect, useState } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector from '@mui/material/StepConnector'
import StepContent from '@mui/material/StepContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

// Component Imports
import { useLocation } from 'react-use';
import { useSession } from 'next-auth/react';

import StepPatientDetails from './StepPatientDetails'
import StepIcdDetails from './StepIcdDetails'
import StepTestDetails from './StepTestDetails'
import StepSpecimenDetails from './StepSpecimenDetails'
import StepBillingDetails from './StepBillingDetails'

import PatientSubtitle from './subtitle/Patient';
import IcdSubtitle from './subtitle/IcdCodes';
import TestSubtitle from './subtitle/Tests';
import SpecimenSubtitle from './subtitle/Specimen';
import BillingSubtitle from './subtitle/Billing';

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'

import AccountCard from './AccountCard'

import type { LabOrderSponsoredTestConsentWithRelations, LabOrderTestWithRelations, LabOrderWithRelations, PatientWithRelations, SponsoredTestWithPartialRelations} from '~prisma/generated/zod'
import { api } from '~trpc/react';
import StepEligibility from './StepEligibility';
import Eligibility from './subtitle/Eligibility';


// Types
type Step = {
  title: string,
  subtitle: string,
  stepDetails: any,
  subTitleDetails: any
}

// Vars
const stepEntries = [
  {
    title: 'Patient',
    subtitle: 'Patient',
    stepDetails: StepPatientDetails,
    subTitleDetails: PatientSubtitle
  },
  {
    title: 'ICD Codes',
    subtitle: 'Patient History',
    stepDetails: StepIcdDetails,
    subTitleDetails: IcdSubtitle
  },
  {
    title: 'Tests',
    subtitle: 'Test Selection',
    stepDetails: StepTestDetails,
    subTitleDetails: TestSubtitle
  },
  {
    title: 'Specimen',
    subtitle: 'Specimen Type',
    stepDetails: StepSpecimenDetails,
    subTitleDetails: SpecimenSubtitle
  },
  {
    title: 'Billing',
    subtitle: 'Billing',
    stepDetails: StepBillingDetails,
    subTitleDetails: BillingSubtitle
  }
]



// Styled Components
const ConnectorHeight = styled(StepConnector)(() => ({
  '& .MuiStepConnector-line': {
    maxHeight: 0,
    maxWidth: 0,
    minHeight: 0,
    minWidth: 0
  }
}))

type LabOrderContextType = {
  labOrder: LabOrderWithRelations,
  setLabOrder: Dispatch<SetStateAction<LabOrderWithRelations>>
};

// Step 1: Create a new context
export const LabOrderContext = createContext<LabOrderContextType>({} as LabOrderContextType)

const AddLabOrder = () => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)
  const [patientId, setPatientId] = useState<string>('')
  const [labOrder, setLabOrder] = useState<LabOrderWithRelations>({} as LabOrderWithRelations)
  const [labOrderCopy, setLabOrderCopy] = useState<LabOrderWithRelations>({} as LabOrderWithRelations)
  const [steps, setSteps] = useState<Step[]>(stepEntries)

  const { data: session } = useSession()

  console.log('patientId: ', session?.patientId)

  const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void) => {
    const Tag = steps[step].stepDetails;

    return <Tag activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
  }

  const getSubtitle = (step: number) => {
    const Subtitle = steps[step].subTitleDetails;

    return <Subtitle />
  }

  // rearrange steps
  const rearrangeSteps = (steps: any[], stepToMove: number) => {
    const newSteps = [...steps]
    const targetObj = newSteps.splice(stepToMove, 1)

    return [...targetObj, ...newSteps]
  }

  const moveToTop = (title: string) => {
    const index = stepEntries.findIndex(entry => entry.title === title);

    if (index > -1) {
      const [entry] = stepEntries.splice(index, 1); // Remove the entry

      stepEntries.unshift(entry); // Add it to the top
    }
  }

  useEffect(() => {
    if (session && session.patientId && session.patientId.length > 0) {
      setPatientId(session.patientId)

      console.log('patientId: ', patientId)
    }
  }, [session, setPatientId, patientId])

  const { data: patData, error: patError, isLoading: patIsLoading } = api.patient.getPatientById.useQuery({ id: patientId })

  useEffect(() => {
    if (patError) {
      console.error(patError);
    }

    if (patIsLoading) {
      return;
    }

    if (session && patData && patData?.Id.length > 0) {
      const labOrderCopy = { ...labOrder, Patient: patData as PatientWithRelations }

      console.log('LabOrderCopy after patient: ', labOrderCopy);

        // Only update the state if labOrderCopy has changed
      if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrder)) {
        console.log('LabOrderCopy: ', labOrderCopy);
        setLabOrderCopy(labOrderCopy);
      }
    }

  }, [session, patData, patError, patIsLoading, labOrder, setLabOrderCopy]);



  // Get the current location
  const location = useLocation();

  // Parse the query parameters
  const queryParams = new URLSearchParams(location.search);

  // Get a specific query parameter
  const testCatalogQuery = queryParams.get('testcatalog[query]');

  console.log('testcatalog: ', testCatalogQuery);
  const { data: tcData, error: tcError, isLoading: tcIsLoading } = api.testcatalog.getTestByCasandraTestId.useQuery({ casandraTestId: testCatalogQuery || ''})

  useEffect(() => {
    const sponsoredTests = tcData?.SponsoredTest || [];

    if(sponsoredTests && sponsoredTests.length > 0 && testCatalogQuery) {

      const hasEligibility = stepEntries.some(entry => entry.title === 'Eligibility')

      if (!hasEligibility) {
        const eligibilityStep = {
          title: 'Eligibility',
          subtitle: 'Eligibility',
          stepDetails: StepEligibility,
          subTitleDetails: Eligibility
        }

        stepEntries.push(eligibilityStep);
        moveToTop('Tests');
        moveToTop('Eligibility');
        setSteps(stepEntries);
        setActiveStep(0);
      }

      sponsoredTests.forEach((sponsoredTest: SponsoredTestWithPartialRelations) => {
        if(sponsoredTest?.TestId === tcData?.TestId && sponsoredTest?.SponsoredProgram?.ProgramEligibility) {
          console.log('Sponsored Test: ', sponsoredTest);

          // Generate the LabOrderTest
          const labOrderEligibilityConsent = [{
            TestId: tcData.TestId,
            SponsoredTest: tcData.SponsoredTest
          }] as unknown as LabOrderSponsoredTestConsentWithRelations[];

          const labOrderCopy = { ...labOrder, LabOrderSponsoredTestConsent: labOrderEligibilityConsent };

          // Only update the state if labOrderCopy has changed
          if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrder)) {
            console.log('LabOrderCopy: ', labOrderCopy);
            setLabOrderCopy(labOrderCopy);
          }

        }
      });
    } else if (testCatalogQuery && !sponsoredTests) {

      //move test details to top
      const newSteps = rearrangeSteps(stepEntries, 2);

      setSteps(newSteps);

      // set th test step as active
      setActiveStep(0);
    }

  }, [setActiveStep, tcData, testCatalogQuery, labOrder, setLabOrderCopy, setSteps])


  useEffect(() => {
    if (tcError) {
      console.error(tcError);
    }

    if (tcIsLoading) {
      return;
    }

    if (testCatalogQuery && tcData && tcData?.TestId > 0) {
      // Generate the LabOrderTest
      const labOrderTest = [{
        TestId: tcData.TestId,
        TestCatalog: tcData
      }] as unknown as LabOrderTestWithRelations[];

      const labOrderCopy = { ...labOrder, LabOrderTest: labOrderTest };

      // Only update the state if labOrderCopy has changed
      if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrder)) {
        console.log('LabOrderCopy: ', labOrderCopy);
        setLabOrderCopy(labOrderCopy);
      }
    }

  }, [testCatalogQuery, tcData, tcError, tcIsLoading, labOrder, setLabOrderCopy]);

  useEffect(() => {
    setLabOrder(labOrderCopy);
  }, [labOrderCopy, setLabOrder])

  // Handlers
  const handleNext = () => {
    if (activeStep !== steps.length - 1) {
      setActiveStep(activeStep + 1)
    } else {
      alert('Submitted..!!')
    }
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <LabOrderContext.Provider value={{ labOrder, setLabOrder }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <AccountCard />
          </Grid>
          <Grid item xs={12}>
            <Card className='flex flex-col lg:flex-row'>
              <CardContent className='border-be lg:border-be-0 lg:border-ie lg:min-is-[300px]'>
                <StepperWrapper className='bs-full'>
                  <Stepper activeStep={activeStep} orientation='vertical' connector={<ConnectorHeight />}>
                    {steps.map((step, index) => {
                      return (
                        <Step key={index} onClick={() => setActiveStep(index)}>
                          <StepLabel className='p-0' StepIconComponent={StepperCustomDot}>
                            <div className='step-label cursor-pointer'>
                              {/* <Typography className='step-number' color='text.primary'>{`0${index + 1}`}</Typography> */}
                              <div>
                                <Typography className='step-title' color='text.primary'>
                                  {step.title}
                                </Typography>
                                <StepContent TransitionProps={{ in: true }}>
                                  {getSubtitle(index)}
                                </StepContent>
                              </div>
                            </div>
                          </StepLabel>
                        </Step>
                      )
                    })}
                  </Stepper>
                </StepperWrapper>
              </CardContent>

              <CardContent className='flex-1 !pbs-5'>{getStepContent(activeStep, handleNext, handlePrev)}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </LabOrderContext.Provider>
  )
}

export default AddLabOrder
