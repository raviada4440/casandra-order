// React Imports
import React, { useContext, useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from '@mui/material'

import { makeStyles } from '@mui/styles'


// Component Imports
import { LabOrderContext } from '..'

const useStyles = makeStyles({
  cell150: {
    minWidth: 150,
    maxWidth: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
})

const TestSubtitle = () => {

  // Vars
  const { labOrder, setLabOrder } = useContext(LabOrderContext);
  const classes = useStyles();
  const [deleteId, setDeleteId] = useState(undefined as string | undefined)
  const [open, setOpen] = useState(false)

  const handleOpen = (id: string) => {
    console.log('Deleting with id: ', id)
    setDeleteId(id)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    if (labOrder && labOrder.LabOrderTest) {
      const updatedLabOrderTest = labOrder.LabOrderTest.filter(test => test.Id !== deleteId);

      setLabOrder({ ...labOrder, LabOrderTest: updatedLabOrderTest });
    }

    setOpen(false)
  }

  return (
      <div>
        { labOrder?.LabOrderTest && labOrder?.LabOrderTest.length > 0 ? labOrder?.LabOrderTest?.map((test, index) => (
          <React.Fragment key={index}>
          <Grid container alignItems="center" spacing={0}>
            <Grid item xs={3}>
              <Typography className='step-subtitle'>{`${test.TestCatalog?.CasandraTestId}`}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={`${classes.cell150} step-subtitle`}>{`${test.TestCatalog?.TestName}`}</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => handleOpen(test.Id ?? '')}>
                <i className='ri-delete-bin-7-line text-[12px] text-textSecondary' />
              </IconButton>
            </Grid>
          </Grid>
        </React.Fragment>
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
        )
      }
          <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>{"Confirm Delete"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this item?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleDelete} color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
    </div>
  )
}

export default TestSubtitle
