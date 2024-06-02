// React Imports
import { useContext, useEffect, useState } from 'react'

// MUI Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import uuid from 'react-native-uuid'

import dayjs, { extend } from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import type { ButtonProps } from '@mui/material'
import { Button, CardHeader, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardContent, } from '@mui/material'

import styles from '@core/styles/table.module.css'

// Styled Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'

import { LabOrderContext } from '.'
import type { LabOrderSpecimenWithRelations } from '~prisma/generated/zod'
import AddSpecimenDetails from './dialogs/AddSpecimenDetails'

extend(utc);
extend(timezone);

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

const getEmptySpecimenRecord = () => {
  return  {
    Id: uuid.v4(),
    LabOrderId: undefined,
    SpecimenType: undefined,
    SpecimenCount: undefined,
    CollectedDate: new Date(),
    CollectedTime: dayjs.utc(new Date()).tz('America/Chicago').format('HH:mm A'),
    SpecimenID: undefined,
    BodySite: undefined,
    TumorType: undefined,
    Fixative: undefined,
    FixativeDuration: undefined,
    ColdIschemicTime: undefined,
  } as unknown as LabOrderSpecimenWithRelations
}

const StepSpecimenDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {

  // States
  const { labOrder, setLabOrder } = useContext(LabOrderContext)

  const [data, setData] = useState(labOrder.LabOrderSpecimen ?? [] as LabOrderSpecimenWithRelations[])
  const [deleteId, setDeleteId] = useState(undefined as string | undefined)
  const [open, setOpen] = useState(false)
  const [emptySepcimenRecord, setEmptySpecimenRecord] = useState<LabOrderSpecimenWithRelations>(getEmptySpecimenRecord())

  const renderOpenDialog = () => {
    return (
      <OpenDialogOnElementClick
        element={Button}
        elementProps={buttonProps}
        dialog={AddSpecimenDetails}
        dialogProps={{ specimenRecord: emptySepcimenRecord }}
      />
    )
  }

  const handleOpen = (id: string) => {
    console.log('Deleting with id: ', id)
    setDeleteId(id)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    // Create a copy of labOrder
    const labOrderCopy = { ...labOrder }
    const updatedData = data.filter(item => item.Id !== deleteId)

    labOrderCopy.LabOrderSpecimen = updatedData

    setData(updatedData)

    // Update labOrder
    setLabOrder(labOrderCopy)

    console.log('labOrder: ', labOrder)
    setOpen(false)
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
    data: data as LabOrderSpecimenWithRelations[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    },
  })

  useEffect(() => {
    if (labOrder.LabOrderSpecimen) {
      console.log('labOrder.LabOrderSpecimen', labOrder.LabOrderSpecimen)

      setData(labOrder.LabOrderSpecimen)
      console.log('data', data)
    }
  }, [labOrder, data, setData])

  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: '+Add Specimen(s) to Order',
    onClick: () => {
      setEmptySpecimenRecord(getEmptySpecimenRecord())
    }
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
          action={renderOpenDialog()}
        />
        <CardContent>
        <div className='overflow-x-auto mb-20'>
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
                  .rows.map(row => (
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
