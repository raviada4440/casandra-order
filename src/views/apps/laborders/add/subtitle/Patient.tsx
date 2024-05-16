// React Imports
import { useContext } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'


// Component Imports
import { LabOrderContext } from '..'

const PatientSubtitle = () => {

  // Vars
  const { labOrder } = useContext(LabOrderContext);

  return (
    <div>
      { labOrder.Patient ? (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Name:</Typography>
          <Typography className='step-subtitle'>{ labOrder.Patient.FirstName && labOrder.Patient.LastName ? `${labOrder.Patient?.FirstName} ${labOrder.Patient?.LastName}` : ''}</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>DOB:</Typography>
          <Typography className='step-subtitle'>{ labOrder.Patient.DateOfBirth ? `${labOrder.Patient?.DateOfBirth}` : ''}</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>MRN:</Typography>
          <Typography className='step-subtitle'>{ labOrder.PatientMRN ? `${labOrder.PatientMRN}` : ''}</Typography>
        </div>
      </>
      ) : (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Name:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>DOB:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>MRN:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        </>
      )}
    </div>
  )
}

export default PatientSubtitle
