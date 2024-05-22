// React Imports
import { useContext, useState } from 'react'

// MUI Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


import type { ButtonProps } from '@mui/material';
import { Button, CardHeader, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardContent, } from '@mui/material'

import styles from '@core/styles/table.module.css'

// Styled Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick';

import { LabOrderContext } from '.'
import type { LabOrderSpecimenWithRelations } from '~prisma/generated/zod'
import AddSpecimenDetails from './dialogs/AddSpecimenDetails';

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const columnHelper = createColumnHelper<LabOrderSpecimenWithRelations>()

const convertDate = (collectionDate: Date|null) => collectionDate ? new Date(collectionDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}) : 'N/A'


const StepSpecimenDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // States
  const { labOrder, setLabOrder } = useContext(LabOrderContext);

  const [data, setData] = useState([] as LabOrderSpecimenWithRelations[])
  const [deleteId, setDeleteId] = useState(undefined as string | undefined);
  const [open, setOpen] = useState(false);

  const handleOpen = (id: string) => {
    console.log('Deleting with id: ', id);
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {

    // setData(data.filter(item => item.Id !== deleteId));
    // router.refresh();
    // setOpen(false);
  }

  const handleSave = (specimen: LabOrderSpecimenWithRelations) => {
    if (specimen) {
      console.log('specimen: ', specimen)

      // Create a copy of labOrder
      const labOrderCopy = { ...labOrder }

      if (labOrderCopy.LabOrderSpecimen)
         labOrderCopy.LabOrderSpecimen.push(specimen)
      else {
        labOrderCopy.LabOrderSpecimen = []
        labOrderCopy.LabOrderSpecimen.push(specimen)
      }

      console.log('labOrderCopy: ', labOrderCopy)

      // labOrderCopy.LabOrderSpecimen.push(specimen)

      setLabOrder(labOrderCopy)
      setData(labOrderCopy.LabOrderSpecimen)
      console.log('data: ', data)

    }
  }

  const columns = [
    columnHelper.accessor('SpecimenType', {
      cell: info => info.getValue(),
      header: 'Specimen Type'
    }),
    columnHelper.accessor('SpecimenCount', {
      cell: info => info.getValue(),
      header: 'Specimen Count'
    }),
    columnHelper.accessor('CollectedDate', {
      cell: (info) => (
        <div style={{ minWidth: '50px' }}>
          {convertDate(info.row.original.CollectedDate)}
        </div>
      ),
      header: 'Collected Date'
    }),
    columnHelper.accessor('CollectedTime', {
      cell: info => info.getValue(),
      header: 'Collected Time'
    }),
    columnHelper.accessor('SpecimenID', {
      cell: (info) => (
        <div style={{ minWidth: '50px' }}>
          {info.row.original.SpecimenID ?? 'N/A'}
        </div>
      ),
      header: 'Specimen ID'
    }),
    columnHelper.accessor('Id', {
      header: 'Action',
      cell: (info) => (
        <div className='flex items-center'>
          <IconButton onClick={() => handleOpen(info.row.original.Id ?? 0)}>
            <i className='ri-delete-bin-7-line text-[22px] text-textSecondary' />
          </IconButton>
        </div>
      ),
      enableSorting: false
    })
  ]

  // Hooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    },
  })

  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: '+Add Specimen(s) to Order',
  }

  return (
    <>
      <Card>
        <CardHeader
          avatar={<i className='ri-test-tube-line text-3xl text-primary' />}
          title={
            <Typography variant='h5' className='text-primary'>
              Specimen Details
            </Typography>
          }
          className='items-start sm:flex-row sm:items-center'
          sx={{ '& .MuiCardHeader-action': { m: 0 }, '& .MuiCardHeader-avatar': { mr: 0 }}}
          action={<OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddSpecimenDetails} dialogProps={{ onValueChange: handleSave }} />}
        />
        <CardContent>
        <div className='overflow-x-auto'>
          <table className={styles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {table.getCoreRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    No specimens are added
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, 10)
                  .map(row => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            )}
          </table>
        </div>
        <Grid item xs={12}>
            <div className='flex items-center justify-between'>
              <Button
                variant='outlined'
                color='secondary'
                disabled={activeStep === 0}
                onClick={handlePrev}
                startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
              >
                Previous
              </Button>
              <Button
                variant='contained'
                color={activeStep === steps.length - 1 ? 'success' : 'primary'}
                onClick={handleNext}
                endIcon={
                  activeStep === steps.length - 1 ? (
                    <i className='ri-check-line' />
                  ) : (
                    <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
                  )
                }
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </Grid>

        </CardContent>
      </Card>
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
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )

}

export default StepSpecimenDetails
