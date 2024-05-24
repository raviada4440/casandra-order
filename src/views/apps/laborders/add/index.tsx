'use client'

// React Imports
import type { Dispatch, SetStateAction} from 'react';
import { createContext, useState } from 'react'

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

import type { LabOrderWithRelations } from '~prisma/generated/zod'

// Types

// Vars
const steps = [
  {
    title: 'Patient',
    subtitle: 'Patient'
  },
  {
    title: 'ICD Codes',
    subtitle: 'Patient History'
  },
  {
    title: 'Tests',
    subtitle: 'Test Selection'
  },
  {
    title: 'Specimen',
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
      ? StepPatientDetails
      : step === 1
        ? StepIcdDetails
        : step === 2
          ? StepTestDetails
          : step === 3
            ? StepSpecimenDetails
            : StepBillingDetails



  return <Tag activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
}


const getSubtitle = (step: number) => {
  const Subtitle =
    step === 0
      ? PatientSubtitle
      : step === 1
        ? IcdSubtitle
        : step === 2
          ? TestSubtitle
          : step === 3
            ? SpecimenSubtitle
            : BillingSubtitle

  return <Subtitle />
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
  labOrder: LabOrderWithRelations,
  setLabOrder: Dispatch<SetStateAction<LabOrderWithRelations>>
};

// Step 1: Create a new context
export const LabOrderContext = createContext<LabOrderContextType>({} as LabOrderContextType)

const AddLabOrder = () => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)
  const [labOrder, setLabOrder] = useState<LabOrderWithRelations>({} as LabOrderWithRelations)

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
