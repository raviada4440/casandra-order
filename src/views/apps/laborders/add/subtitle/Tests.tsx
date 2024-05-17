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

const TestSubtitle = () => {

  // Vars
  const { labOrder } = useContext(LabOrderContext);
  const classes = useStyles();

  return (
    <div>
      { labOrder.LabOrderTest && labOrder.LabOrderTest.length > 0 ? labOrder.LabOrderTest?.map((test, index) => (
        <div key={index} className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>{`${test.TestCatalog?.LabTestId}`}</Typography>
          <Typography className={`${classes.cell25} step-subtitle`}>{`${test.TestCatalog?.TestName}`}</Typography>
        </div>
      )) : (
        <>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Test Code: </Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Typography className='step-subtitle min-is-[65px]'>Test Name: </Typography>
          <Typography className='step-subtitle'>&nbsp;</Typography>
        </div>
        </>
      )}
    </div>
  )
}

export default TestSubtitle
