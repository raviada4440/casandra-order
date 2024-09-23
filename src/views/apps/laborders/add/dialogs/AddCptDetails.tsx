// React Imports
import { useContext, useEffect, useRef, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { DialogActions } from '@mui/material'


// Styled Component Imports

import type { LabOrderCptWithRelations } from '~prisma/generated/zod'
import { LabOrderContext } from '..'
import AutocompleteIcd from '../autocomplete/AutocompleteIcd';

type AddCptProps = {
  open: boolean
  setOpen: (open: boolean) => void
  cptRecord: LabOrderCptWithRelations
}

const AddCptDetails = ({ open, setOpen, cptRecord }: AddCptProps) => {
  // States
  const { labOrder, setLabOrder, } = useContext(LabOrderContext);
  const [formData, setFormData] = useState<LabOrderCptWithRelations>(cptRecord)
  const hasSetFormData = useRef(false);




  useEffect(() => {
    if (open && !hasSetFormData.current) {
      // console.log('empty cptRecord received: ', cptRecord);
      setFormData({ ...cptRecord });
      hasSetFormData.current = true;
    } else if (!open) {
      hasSetFormData.current = false;
    }
  }, [open, cptRecord]);

  const handleFormChange = (field: keyof LabOrderCptWithRelations, value: LabOrderCptWithRelations[keyof LabOrderCptWithRelations]) => {
    const updatedFormData = { ...formData, [field]: value };

    setFormData(updatedFormData as LabOrderCptWithRelations);
  }

  const handleSave = (cpt: LabOrderCptWithRelations) => {
    if (cpt) {
      // console.log('cpt: ', cpt)

      // Create a copy of labOrder
      const labOrderCopy = { ...labOrder }

      // Add the cpt to LabOrderCpt
      labOrderCopy.LabOrderCpt = [...(labOrderCopy.LabOrderCpt || []), cpt]

      // console.log('labOrderCopy: ', labOrderCopy)

      // Update labOrder
      setLabOrder(labOrderCopy)

      // console.log('labOrder: ', labOrder)
      setFormData({} as LabOrderCptWithRelations)
    }
  }

  return (
    <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={() => setOpen(false)}>
      <DialogTitle
        variant='h4'
        className='flex gap-2 flex-col text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        Cpt Details
      </DialogTitle>
      <DialogContent className='flex flex-col gap-6 pbs-0 pbe-10 pli-10 sm:pli-16 sm:pbe-16'>
        <IconButton onClick={() => setOpen(false)} className='absolute block-start-4 inline-end-4'>
          <i className='ri-close-line' />
        </IconButton>
          <div className='flex flex-col gap-2 mt-4'>
            <form onSubmit={e => e.preventDefault()}>
            <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
            <TextField
                  fullWidth
                  label='CPT Code'
                  value={formData?.CPTCode || ''}
                  placeholder='CPT Code'
                  onChange={e => handleFormChange('CPTCode', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <AutocompleteIcd />
              </Grid>
            </Grid>
            </form>
          </div>

        <DialogActions className='gap-2 justify-center pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' onClick={() => {
            handleSave(formData || {} as LabOrderCptWithRelations)
            setOpen(false)
          }} type='submit'
          >
            Save
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setFormData({} as LabOrderCptWithRelations)
              setOpen(false)
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

export default AddCptDetails
