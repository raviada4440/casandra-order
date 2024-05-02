'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import type { TestCptCodePartial } from '~prisma/generated/zod'


type AddEditCptCodeProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: TestCptCodePartial
  onValueChange: (value: TestCptCodePartial) => void;
}

const initialTestCptCodeData: AddEditCptCodeProps['data'] = {
  CptCode: '',
  Modifier: '',
  Comments: '',
}


const AddCptCode = ({ open, setOpen, data, onValueChange }: AddEditCptCodeProps) => {
  // States
  const [cptCodeData, setCptCodeData] = useState<AddEditCptCodeProps['data']>(initialTestCptCodeData)

  useEffect(() => {
    setCptCodeData(data ?? initialTestCptCodeData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog
      open={open}
      maxWidth='md'
      scroll='body'
      onClose={() => {
        setOpen(false)
        setCptCodeData(initialTestCptCodeData)
      }}
    >
      <DialogTitle
        variant='h4'
        className='flex gap-2 flex-col text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        <Typography component='span' className='flex flex-col text-center'>
          Add CPT Code and Modifier
        </Typography>
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent className='flex flex-col gap-6 pbs-6 pbe-6 pli-10 sm:pli-16'>
          <IconButton onClick={() => setOpen(false)} className='absolute block-start-4 inline-end-4'>
            <i className='ri-close-line text-textSecondary' />
          </IconButton>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='CPT Code'
                name='cptCode'
                variant='outlined'
                placeholder='5 digit cpt code'
                value={cptCodeData?.CptCode}
                onChange={e => setCptCodeData({ ...cptCodeData, CptCode: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Modifier'
                name='modifier'
                variant='outlined'
                placeholder='Enter modifier if any'
                value={cptCodeData?.Modifier}
                onChange={e => setCptCodeData({ ...cptCodeData, Modifier: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Comments'
                name='comments'
                variant='outlined'
                placeholder='Enter comments if any'
                value={cptCodeData?.Comments}
                onChange={e => setCptCodeData({ ...cptCodeData, Comments: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='gap-2 justify-center pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={() => {
            setOpen(false)
            onValueChange(cptCodeData ?? {})
          }} type='submit'
          >
            Save
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setOpen(false)
              setCptCodeData(initialTestCptCodeData)
            }}
            type='reset'
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddCptCode
