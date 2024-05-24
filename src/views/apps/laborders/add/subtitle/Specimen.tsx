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

  const collectionDateString = (collectionDate: Date|null) => collectionDate ? new Date(collectionDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }) : 'N/A'

  return (
    <div>
      { labOrder.LabOrderSpecimen && labOrder.LabOrderSpecimen.length > 0 ? labOrder.LabOrderSpecimen?.map((specimen, index) => (
        <div key={index} className='flex items-center gap-1'>
          {/* <Typography className='step-subtitle min-is-[65px]'>Type:</Typography> */}
          <Typography className='step-subtitle'>{`${specimen.SpecimenType}`}</Typography>
          <Typography className='step-subtitle'>/</Typography>
          <Typography className='step-subtitle'>{`${collectionDateString(specimen.CollectedDate)}`}</Typography>
          <Typography className='step-subtitle'>/</Typography>
          <Typography className='step-subtitle'>{`${specimen.CollectedTime}`}</Typography>
        </div>
      )) : (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Type:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Body Site:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Date:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
          </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Time:</Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        </>
      )}
    </div>
  )
}

export default SpecimenSubtitle
