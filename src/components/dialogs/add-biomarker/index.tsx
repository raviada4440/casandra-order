'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'


// Component Imports
import { DialogActions } from '@mui/material'

import AutocompleteBiomarker from './AutocompleteBiomarker'
import type { BIOMARKER } from '~prisma/generated/zod'


type AddBiomarkerProps = {
  open: boolean
  setOpen: (open: boolean) => void
  onValueChange: (value: BIOMARKER) => void;
}

const AddBiomarker = ({ open, setOpen, onValueChange }: AddBiomarkerProps) => {
  // Vars
  const initialSelected: BIOMARKER = {} as BIOMARKER;

  // States
  const [selected, setSelected] = useState<BIOMARKER>(initialSelected);

  // console.log('selected', selected)

  return (
    <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={() => setOpen(false)}>
      <DialogTitle
        variant='h4'
        className='flex gap-2 flex-col text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        Biomarker Database
        <Typography component='span' className='flex flex-col text-center'>
          Complete the form to add a new Biomarker code
        </Typography>
      </DialogTitle>
      <DialogContent className='flex flex-col gap-6 pbs-0 pbe-10 pli-10 sm:pli-16 sm:pbe-16'>
        <IconButton onClick={() => setOpen(false)} className='absolute block-start-4 inline-end-4'>
          <i className='ri-close-line' />
        </IconButton>
        <div className='flex flex-col gap-2'>
          <Typography
            component={InputLabel}
            variant='h5'
            color='text.secondary'
            htmlFor='add-member'
            className='inline-flex'
          >
            Search by Biomarker symbol, name or HUGO number
          </Typography>
          <AutocompleteBiomarker onValueChange={(newValue) => setSelected(newValue || {} as BIOMARKER)} />
        </div>
        <DialogActions className='gap-2 justify-center pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={() => {
            setOpen(false)
            onValueChange(selected)
            setSelected(initialSelected)
          }} type='submit'
          >
            Save
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setOpen(false)
              setSelected(initialSelected)
            }}
            type='button'
          >
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default AddBiomarker
