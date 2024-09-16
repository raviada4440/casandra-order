'use client'

// React Imports
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useEffect, useState } from 'react'

import { useParams, useRouter } from 'next/navigation'

import { useLocation } from 'react-use';
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
import { toast } from 'react-toastify'

// Component Imports
import { useSession } from 'next-auth/react';
import uuid from 'react-native-uuid'

import type { Locale } from '@configs/i18n'
import { getLocalizedUrl } from '@/utils/i18n'


import StepPatientDetails from './steps/StepPatientDetails'
import StepIcdDetails from './steps/StepIcdDetails'
import StepTestDetails from './steps/StepTestDetails'
import StepSpecimenCollectionDetails from './steps/StepSpecimenCollectionDetails'

import PatientSubtitle from './subtitle/Patient';
import IcdSubtitle from './subtitle/IcdCodes';
import TestSubtitle from './subtitle/Tests';
import SpecimenSubtitle from './subtitle/Specimen';
import AccountSubtitle from './subtitle/Account';
import BillingSubtitle from './subtitle/Billing';

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'

// import AccountCard from './AccountCard'

import type {
  LabOrderSponsoredTestConsentWithRelations,
  LabOrderTestWithRelations,
  LabOrderWithRelations,
  PatientWithRelations,
  SponsoredTestWithPartialRelations,
} from '~prisma/generated/zod'


import { api } from '~trpc/react';
import StepEligibility from './steps/StepEligibility';
import Eligibility from './subtitle/Eligibility';
import StepSpecimenKitDetails from './steps/StepSpecimenKitDetails';
import StepSpecimenPSCDetails from './steps/StepSpecimenPSCDetails';
import StepAccountDetails from './steps/StepAccountDetails';
import StepBillingDetails from './steps/StepBillingDetails';


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
    title: 'Account',
    subtitle: 'Account',
    stepDetails: StepAccountDetails,
    subTitleDetails: AccountSubtitle
  },
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
    stepDetails: StepSpecimenCollectionDetails,
    subTitleDetails: SpecimenSubtitle
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
  labOrder: LabOrderWithRelations
  setLabOrder: Dispatch<SetStateAction<LabOrderWithRelations>>
  collectionMethod: string
  setCollectionMethod: Dispatch<SetStateAction<string>>
  steps: Step[]
  setSteps: Dispatch<SetStateAction<Step[]>>
  moveToTop: (title: string) => void
  setActiveStep: Dispatch<SetStateAction<number>>
  source: string
  activeStep: number
};

const generateOrderNumber = () => {
  // Generate a 5-digit random number
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;

  // Return 'CS' concatenated with the random number
  return `CS${randomNumber}`;
};

// Step 1: Create a new context
export const LabOrderContext = createContext<LabOrderContextType>({} as LabOrderContextType)

const AddLabOrder = () => {
  // States
  const labOrderStatus = { Id: uuid.v4() as string, Status: 'Order Created', StatusDate: new Date() }

  const [activeStep, setActiveStep] = useState<number>(0)
  const [patientId, setPatientId] = useState<string>('')
  const [collectionMethod, setCollectionMethod] = useState<string>('')
  const [labOrder, setLabOrder] = useState<LabOrderWithRelations>({ Id: uuid.v4() as string, OrderDate: new Date(), OrderNumber: generateOrderNumber(), LabOrderStatus: [labOrderStatus] } as LabOrderWithRelations)
  const [labOrderCopy, setLabOrderCopy] = useState<LabOrderWithRelations>({ ...labOrder } as LabOrderWithRelations)
  const [steps, setSteps] = useState<Step[]>(stepEntries)
  const [tcQuery, setTcQuery] = useState<string>('')
  const [labTestId, setLabTestId] = useState<string>('')

  const [source, setSource] = useState<string>('')

  // console.log('source: ', source)

  const router = useRouter()
  const { lang: locale } = useParams()

  const createLabOrder = api.laborders.upsertLabOrder.useMutation()

  const { data: session } = useSession()

  // console.log('patientId: ', session?.patientId)

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

      // console.log('patientId: ', patientId)
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

    if (patData && patData?.Id.length > 0) {
      const labOrderCopyWithPatient = { ...labOrderCopy, Patient: patData as PatientWithRelations }

      // Only update the state if labOrderCopy has changed
      if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrderCopyWithPatient)) {
        // console.log('labOrderCopyWithPatient: ', labOrderCopy);
        setLabOrderCopy(labOrderCopyWithPatient);
      }
    }
  }, [patData, patError, patIsLoading, labOrderCopy, setLabOrderCopy]);



  // Get the current location
  const location = useLocation();

  useEffect(() => {
    // Parse the query parameters
    const queryParams = new URLSearchParams(location.search);

    const redirectTo = queryParams.get('redirectTo') as string

    let qParams: URLSearchParams = new URLSearchParams();

    if (redirectTo) {
      const url = new URL(redirectTo, location.href)

      qParams = new URLSearchParams(url.search)
    } else {
      qParams = new URLSearchParams(location.search)
    }


    // Get a specific query parameter
    const testCatalogQuery = qParams.get('casandratests[query]') as string;

    const sourceQuery = qParams.get('casandratests[refinementList][Test Type][0]') as string;

    console.log('testCatalogQuery', testCatalogQuery)

    console.log('sourceQuery', sourceQuery)

    setTcQuery(testCatalogQuery)

    setSource(sourceQuery)
    setLabTestId(uuid.v4() as string)

  }, [location, tcQuery, setTcQuery, setLabTestId])


  // // console.log('testcatalog: ', testCatalogQuery);
  // const { data: tcData, error: tcError, isLoading: tcIsLoading } = api.testcatalog.getTestByCasandraTestId.useQuery({ casandraTestId: tcQuery || '' })

  // useEffect(() => {
  //   if (tcData) {
  //     const sponsoredTests = tcData?.SponsoredTest || []
  //     const collectionOption = tcData?.CollectionMethod || ''

  //     setCollectionMethod(collectionOption)

  //     const specimenEntry = stepEntries.find(entry => entry.title === "Specimen")

  //     if (specimenEntry) {
  //       if (collectionOption === 'KIT') {
  //         specimenEntry.stepDetails = StepSpecimenKitDetails
  //       } else if (collectionOption === 'PSC') {
  //         specimenEntry.stepDetails = StepSpecimenPSCDetails
  //       }
  //     }

  //     if (sponsoredTests && sponsoredTests.length > 0 && tcQuery) {
  //       sponsoredTests.forEach((sponsoredTest: SponsoredTestWithPartialRelations) => {
  //         if (sponsoredTest?.TestId === tcData?.TestId && sponsoredTest?.SponsoredProgram?.ProgramEligibility) {
  //           // console.log('Sponsored Test: ', sponsoredTest);

  //           // Generate the LabOrderTest
  //           const labOrderEligibilityConsent = [{
  //             TestId: tcData.TestId,
  //             SponsoredTest: tcData.SponsoredTest
  //           }] as unknown as LabOrderSponsoredTestConsentWithRelations[];

  //           const labOrderCopy = { ...labOrder, LabOrderSponsoredTestConsent: labOrderEligibilityConsent };

  //           // Only update the state if labOrderCopy has changed
  //           if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrder)) {
  //             // console.log('LabOrderCopy: ', labOrderCopy);
  //             setLabOrderCopy(labOrderCopy);
  //           }

  //         }
  //       });
  //     } else if (tcQuery && !sponsoredTests) {

  //       //move test details to top
  //       const newSteps = rearrangeSteps(stepEntries, 2);

  //       setSteps(newSteps);

  //       // set th test step as active
  //       setActiveStep(0);
  //     }
  //   }
  // }, [setActiveStep, tcData, tcQuery, labOrder, setLabOrderCopy, setSteps])


  // useEffect(() => {
  //   if (tcError) {
  //     console.error(tcError);
  //   }

  //   if (tcIsLoading) {
  //     return;
  //   }

  //   if (tcQuery && tcData && tcData?.TestId > 0) {
  //     // Generate the LabOrderTest
  //     const labOrderTest = [{
  //       Id: labTestId,
  //       TestId: tcData.TestId,
  //       TestCatalog: tcData
  //     }] as unknown as LabOrderTestWithRelations[];

  //     if (tcData?.SponsoredTest && tcData?.SponsoredTest?.length > 0 && source === 'Sponsored') {
  //       const hasEligibility = stepEntries.some(entry => entry.title === 'Eligibility')

  //       if (!hasEligibility) {
  //         const eligibilityStep = {
  //           title: 'Eligibility',
  //           subtitle: 'Eligibility',
  //           stepDetails: StepEligibility,
  //           subTitleDetails: Eligibility
  //         }

  //         stepEntries.push(eligibilityStep);
  //         moveToTop('Eligibility');
  //         moveToTop('Tests');
  //         setSteps(stepEntries);
  //         setActiveStep(0);
  //       }
  //     } else if (tcData?.CdxTest && tcData?.CdxTest?.length > 0 && source === 'CDx') {
  //       const hasEligibility = stepEntries.some(entry => entry.title === 'Eligibility')

  //       if (hasEligibility) {
  //         const index = stepEntries.findIndex(entry => entry.title === 'Eligibility');

  //         if (index > -1) {
  //           stepEntries.splice(index, 1);
  //           setSteps(stepEntries);
  //         }
  //       }

  //       const hasBilling = stepEntries.some(entry => entry.title === 'Billing')

  //       if (!hasBilling) {
  //         const eligibilityStep = {
  //           title: 'Billing',
  //           subtitle: 'Billing',
  //           stepDetails: StepBillingDetails,
  //           subTitleDetails: BillingSubtitle
  //         }

  //         stepEntries.push(eligibilityStep);
  //         moveToTop('Tests');
  //         setSteps(stepEntries);
  //         setActiveStep(0);
  //       }
  //     }

  //     const labOrderCopy = { ...labOrder, LabOrderTest: labOrderTest };

  //     // Only update the state if labOrderCopy has changed
  //     if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrder)) {
  //       // console.log('LabOrderCopy: ', labOrderCopy);
  //       setLabOrderCopy(labOrderCopy);
  //     }
  //   }

  // }, [tcQuery, tcData, tcError, tcIsLoading, labOrder, setLabOrderCopy, labTestId, source]);

  // useEffect(() => {
  //   setLabOrder(labOrderCopy);
  // }, [labOrderCopy, setLabOrder])

  const addQueryParam = (key: string, value: string) => {
    const url = new URL(window.location.href);

    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
  }

  // Handlers
  const handleNext = () => {
    if (activeStep !== steps.length - 1) {
      const currentStep = steps[activeStep+1]

      console.log('Current Step: ', currentStep.title)

      if (currentStep.title === 'Tests') {
        console.log('Current Step: ', currentStep.title)

        if (labOrder.LabOrderIcd.length > 0 ) {
          console.log('labOrder.LabOrderIcd.length: ', labOrder.LabOrderIcd.length)
          addQueryParam('casandratests[query]', labOrder.LabOrderIcd[0].ICD?.Code || '')
        }
      }

      setActiveStep(activeStep + 1)
    } else {
      console.log('LabOrder: ', JSON.stringify(labOrder))
      saveLabOrder()
    }
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const saveLabOrder = () => {

    const newLabOrder = {
      Id: labOrder.Id,
      OrderNumber: labOrder.OrderNumber,
      PatientMRN: labOrder.PatientMRN,
      PatientMobile: labOrder.Patient?.Mobile,
      PatientEmail: labOrder.Patient?.Email,
      OrderingProviderId: labOrder.OrderingProvider?.Id,
      TreatingProviderId: labOrder.TreatingProvider?.Id,
      OrganizationId: labOrder.Organization?.Id,
      PatientId: labOrder.Patient?.Id,
      OrderDate: labOrder.OrderDate,
      LabOrderIcd: { connectOrCreate: labOrder.LabOrderIcd.map(labIcd => ({ where: { Id: labIcd.Id }, create: { Id: labIcd.Id, ICDId: labIcd.ICD?.Id } })) },
      LabOrderTest: { connectOrCreate: labOrder.LabOrderTest.map(labTest => ({ where: { Id: labTest.Id }, create: { Id: labTest.Id, TestId: labTest.TestId } })) },
      LabOrderSpecimen: { connectOrCreate: labOrder.LabOrderSpecimen.map(labSpecimen => ({ where: { Id: labSpecimen.Id }, create: labSpecimen })) },
      LabOrderStatus: { connectOrCreate: labOrder.LabOrderStatus.map(labOrderStatus => ({ where: { Id: labOrderStatus.Id }, create: labOrderStatus })) },
    }

    createLabOrder.mutate(newLabOrder, {
      onSuccess: (newData) => {
        console.log('Returned data:', newData)
        toast.success('Lab Order Created Successfully')
        router.push(getLocalizedUrl(`apps/laborders/list?refreshId=${new Date().getTime()}`, locale as Locale))
      },
      onError: (error) => {
        console.error('Error creating lab order:', error)
        toast.error('Error creating lab order')
      }
    })

  }

  return (
    <LabOrderContext.Provider value={{ labOrder, setLabOrder, collectionMethod, setCollectionMethod, steps, setSteps, moveToTop, setActiveStep, source, activeStep}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={6}>
          {/* <Grid item xs={12}>
            <AccountCard />
          </Grid> */}
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
                              <div key={uuid.v4() as string}>
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
