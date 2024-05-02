// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

type PermissionDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: string
}

type EditProps = {
  handleClose: () => void
  data: string
}

const AddContent = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <DialogContent className='overflow-visible pbs-0 pbe-6 pli-10 sm:pli-16'>
        <IconButton onClick={handleClose} className='absolute block-start-4 inline-end-4'>
          <i className='ri-close-line text-textSecondary' />
        </IconButton>
        <TextField
          fullWidth
          label='Permission Name'
          variant='outlined'
          placeholder='Enter Permission Name'
          className='mbe-2'
        />
        <FormControlLabel control={<Checkbox />} label='Set as core permission' />
      </DialogContent>
      <DialogActions className='gap-2 justify-center pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
        <Button type='submit' variant='contained' onClick={handleClose}>
          Create Permission
        </Button>
        <Button onClick={handleClose} variant='outlined'>
          Discard
        </Button>
      </DialogActions>
    </>
  )
}

const EditContent = ({ handleClose, data }: EditProps) => {
  return (
    <DialogContent className='overflow-visible pbs-0 pbe-6 pli-10 sm:pli-16'>
      <IconButton onClick={handleClose} className='absolute block-start-4 inline-end-4'>
        <i className='ri-close-line text-textSecondary' />
      </IconButton>
      <Alert severity='warning' className='mbe-8'>
        <AlertTitle>Warning!</AlertTitle>
        By editing the permission name, you might break the system permissions functionality. Please ensure you&#39;re
        absolutely certain before proceeding.
      </Alert>
      <div className='flex items-center gap-4 mbe-2'>
        <TextField fullWidth size='small' defaultValue={data} variant='outlined' placeholder='Enter Permission Name' />
        <Button variant='contained' onClick={handleClose}>
          Update
        </Button>
      </div>
      <FormControlLabel control={<Checkbox />} label='Set as core permission' />
    </DialogContent>
  )
}

const PermissionDialog = ({ open, setOpen, data }: PermissionDialogProps) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        variant='h4'
        className='flex flex-col gap-2 text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        {data ? 'Edit Permission' : 'Add New Permission'}
        <Typography component='span' className='flex flex-col text-center'>
          {data ? 'Edit permission as per your requirements.' : 'Permissions you may use and assign to your users.'}
        </Typography>
      </DialogTitle>
      {data ? <EditContent handleClose={handleClose} data={data} /> : <AddContent handleClose={handleClose} />}
    </Dialog>
  )
}

export default PermissionDialog
