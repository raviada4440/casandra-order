// React Imports
import { useContext } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'

// import { makeStyles } from '@mui/styles'


// Component Imports
import { LabOrderContext } from '..'

// const useStyles = makeStyles({
//   cell25: {
//     maxWidth: 25,
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//   }
// })

const SpecimenSubtitle = () => {

  // Vars
  const { labOrder } = useContext(LabOrderContext);

  // const classes = useStyles();

  return (
    <div>
      { labOrder.LabOrderSpecimen && labOrder.LabOrderSpecimen.length > 1 ? labOrder.LabOrderSpecimen?.map((specimen, index) => (
        <div key={index} className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Specimen Type:</Typography>
          <Typography className='step-subtitle'>{`${specimen.SpecimenType}`}</Typography>
          <Typography className='step-subtitle min-is-[65px]'>Body Site:</Typography>
          <Typography className='step-subtitle'>{`${specimen.BodySite}`}</Typography>
          <Typography className='step-subtitle min-is-[65px]'>Collection Date:</Typography>
          <Typography className='step-subtitle'>{`${specimen.CollectedDate}`}</Typography>
          <Typography className='step-subtitle min-is-[65px]'>Collection Time:</Typography>
          <Typography className='step-subtitle'>{`${specimen.CollectedTime}`}</Typography>
        </div>
      )) : (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Specimen Type:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Body Site:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Collection Date:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Collection Time:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        </>
      )}
    </div>
  )
}

export default SpecimenSubtitle
