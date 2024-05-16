'use client'

// React Imports
import { createContext, useContext, useState } from 'react'

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
import StepPersonalDetails from './StepPersonalDetails'
import StepPropertyDetails from './StepPropertyDetails'
import StepPropertyFeatures from './StepPropertyFeatures'
import StepPropertyArea from './StepPropertyArea'
import StepPriceDetails from './StepPriceDetails'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'

import AccountCard from './AccountCard'

import type { LabOrderWithRelations, Patient } from '~prisma/generated/zod'

// Types

// Vars
const steps = [
  {
    title: 'Patient',
    subtitle: 'Patient'
  },
  {
    title: 'Patient History',
    subtitle: 'Patient History'
  },
  {
    title: 'Routine Biomarkers',
    subtitle: 'Routine Biomarkers'
  },
  {
    title: 'Test Selection',
    subtitle: 'Test Selection'
  },
  {
    title: 'Specimen Type',
    subtitle: 'Specimen Type'
  },
  {
    title: 'Billing',
    subtitle: 'Billing'
  }
]

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void) => {
  const Tag =
    step === 0
      ? StepPersonalDetails
      : step === 1
        ? StepPropertyDetails
        : step === 2
          ? StepPropertyFeatures
          : step === 3
            ? StepPropertyArea
            : StepPriceDetails

  return <Tag activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
}

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
};

// Step 1: Create a new context
const LabOrderContext = createContext<LabOrderContextType>({} as LabOrderContextType)

// Use this custom hook in child components to access labOrder
export const useLabOrder = () => useContext(LabOrderContext)

const AddLabOrder = () => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)

  const emptyLabOrder = {} as LabOrderWithRelations

  const [labOrder, setLabOrder] = useState<LabOrderWithRelations>(emptyLabOrder)


  const handleNext = (patient: Patient) => {
    console.log('patient', patient)

    if (activeStep !== steps.length - 1) {
      setActiveStep(activeStep + 1)
      setLabOrder({ ...labOrder, Patient: patient });
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
    <LabOrderContext.Provider value={{ labOrder }}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <AccountCard totalOrdersInTransit={0} totalIncompleteOrders={0} />
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
                                <div>
                                  <div className='flex items-center gap-4'>
                                    <Typography className='step-subtitle min-is-[65px]'>Name:</Typography>
                                    <Typography className='step-subtitle'>{`${labOrder.Patient?.FirstName} ${labOrder.Patient?.LastName}`}</Typography>
                                  </div>
                                  <div className='flex items-center gap-4'>
                                    <Typography className='step-subtitle min-is-[65px]'>Bank name:</Typography>
                                    <Typography className='step-subtitle'>American Bank</Typography>
                                  </div>
                                  <div className='flex items-center gap-4'>
                                    <Typography className='step-subtitle min-is-[65px]'>Country:</Typography>
                                    <Typography className='step-subtitle'>United States</Typography>
                                  </div>
                                  <div className='flex items-center gap-4'>
                                    <Typography className='step-subtitle min-is-[65px]'>IBAN:</Typography>
                                    <Typography className='step-subtitle'>ETD95476213874685</Typography>
                                  </div>
                                  <div className='flex items-center gap-4'>
                                    <Typography className='step-subtitle min-is-[65px]'>SWIFT code:</Typography>
                                    <Typography className='step-subtitle'>BR91905</Typography>
                                  </div>
                                </div>
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
    </LabOrderContext.Provider>
  )
}

export default AddLabOrder
