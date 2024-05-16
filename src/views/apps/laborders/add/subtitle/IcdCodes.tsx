// React Imports
import { useContext } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'


// Component Imports
import { LabOrderContext } from '..'

const useStyles = makeStyles({
  cell25: {
    maxWidth: 25,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
})

const IcdSubtitle = () => {

  // Vars
  const { labOrder } = useContext(LabOrderContext);
  const classes = useStyles();

  return (
    <div>
      { labOrder.LabOrderIcd && labOrder.LabOrderIcd.length > 1 ? labOrder.LabOrderIcd?.map((icd, index) => (
        <div key={index} className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>{`${icd.ICD?.Code}`}</Typography>
          <Typography className={`${classes.cell25} step-subtitle`}>{`${icd.ICD?.ShortDescription}`}</Typography>
        </div>
      )) : (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Code: </Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Desc: </Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        </>
      )}
    </div>
  )
}

export default IcdSubtitle
