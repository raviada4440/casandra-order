'use client'

// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type RoleDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
}

type DataType =
  | string
  | {
      title: string
      read?: boolean
      write?: boolean
      select?: boolean
    }

const defaultData: DataType[] = [
  'User Management',
  'Content Management',
  'Disputes Management',
  'Database Management',
  'Financial Management',
  'Reporting',
  'API Control',
  'Repository Management',
  'Payroll'
]

const RoleDialog = ({ open, setOpen, title }: RoleDialogProps) => {
  // States
  const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>(
    title
      ? [
          'user-management-read',
          'user-management-write',
          'user-management-create',
          'disputes-management-read',
          'disputes-management-write',
          'disputes-management-create'
        ]
      : []
  )

  const [isIndeterminateCheckbox, setIsIndeterminateCheckbox] = useState<boolean>(false)

  const handleClose = () => {
    setOpen(false)
  }

  const togglePermission = (id: string) => {
    const arr = selectedCheckbox

    if (selectedCheckbox.includes(id)) {
      arr.splice(arr.indexOf(id), 1)
      setSelectedCheckbox([...arr])
    } else {
      arr.push(id)
      setSelectedCheckbox([...arr])
    }
  }

  const handleSelectAllCheckbox = () => {
    if (isIndeterminateCheckbox) {
      setSelectedCheckbox([])
    } else {
      defaultData.forEach(row => {
        const id = (typeof row === 'string' ? row : row.title).toLowerCase().split(' ').join('-')

        togglePermission(`${id}-read`)
        togglePermission(`${id}-write`)
        togglePermission(`${id}-create`)
      })
    }
  }

  useEffect(() => {
    if (selectedCheckbox.length > 0 && selectedCheckbox.length < defaultData.length * 3) {
      setIsIndeterminateCheckbox(true)
    } else {
      setIsIndeterminateCheckbox(false)
    }
  }, [selectedCheckbox])

  return (
    <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={handleClose}>
      <DialogTitle
        variant='h4'
        className='flex flex-col gap-2 text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        {title ? 'Edit Role' : 'Add Role'}
        <Typography component='span' className='flex flex-col text-center'>
          Set Role Permissions
        </Typography>
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent className='overflow-visible pbs-0 pbe-6 pli-10 sm:pli-16'>
          <IconButton onClick={handleClose} className='absolute block-start-4 inline-end-4'>
            <i className='ri-close-line text-textSecondary' />
          </IconButton>
          <TextField
            label='Role Name'
            variant='outlined'
            fullWidth
            placeholder='Enter Role Name'
            defaultValue={title}
            onChange={e => e.target.value}
          />
          <Typography variant='h5' className='plb-6'>
            Role Permissions
          </Typography>
          <div className='flex flex-col overflow-x-auto'>
            <table className={tableStyles.table}>
              <tbody>
                <tr>
                  <th className='pis-0'>
                    <Typography className='font-medium whitespace-nowrap flex-grow min-is-[225px]' color='text.primary'>
                      Administrator Access
                    </Typography>
                  </th>
                  <th className='!text-end pie-0'>
                    <FormControlLabel
                      className='mie-0 capitalize'
                      control={
                        <Checkbox
                          onChange={handleSelectAllCheckbox}
                          indeterminate={isIndeterminateCheckbox}
                          checked={selectedCheckbox.length === defaultData.length * 3}
                        />
                      }
                      label='Select All'
                    />
                  </th>
                </tr>
                {defaultData.map((item, index) => {
                  const id = (typeof item === 'string' ? item : item.title).toLowerCase().split(' ').join('-')

                  return (
                    <tr key={index}>
                      <td className='pis-0'>
                        <Typography
                          className='font-medium whitespace-nowrap flex-grow min-is-[225px]'
                          color='text.primary'
                        >
                          {typeof item === 'object' ? item.title : item}
                        </Typography>
                      </td>
                      <td className='!text-end pie-0'>
                        {typeof item === 'object' ? (
                          <FormGroup className='flex-row gap-6 flex-nowrap justify-end'>
                            <FormControlLabel
                              className='mie-0'
                              control={<Checkbox checked={item.read} />}
                              label='Read'
                            />
                            <FormControlLabel
                              className='mie-0'
                              control={<Checkbox checked={item.write} />}
                              label='Write'
                            />
                            <FormControlLabel
                              className='mie-0'
                              control={<Checkbox checked={item.select} />}
                              label='Select'
                            />
                          </FormGroup>
                        ) : (
                          <FormGroup className='flex-row gap-6 flex-nowrap justify-end'>
                            <FormControlLabel
                              className='mie-0'
                              control={
                                <Checkbox
                                  id={`${id}-read`}
                                  onChange={() => togglePermission(`${id}-read`)}
                                  checked={selectedCheckbox.includes(`${id}-read`)}
                                />
                              }
                              label='Read'
                            />
                            <FormControlLabel
                              className='mie-0'
                              control={
                                <Checkbox
                                  id={`${id}-write`}
                                  onChange={() => togglePermission(`${id}-write`)}
                                  checked={selectedCheckbox.includes(`${id}-write`)}
                                />
                              }
                              label='Write'
                            />
                            <FormControlLabel
                              className='mie-0 text-textPrimary'
                              control={
                                <Checkbox
                                  id={`${id}-create`}
                                  onChange={() => togglePermission(`${id}-create`)}
                                  checked={selectedCheckbox.includes(`${id}-create`)}
                                />
                              }
                              label='Create'
                            />
                          </FormGroup>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions className='gap-2 justify-center pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' type='submit' onClick={handleClose}>
            Submit
          </Button>
          <Button variant='outlined' type='reset' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default RoleDialog
