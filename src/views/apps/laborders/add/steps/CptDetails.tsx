// React Imports
import { useContext, useEffect, useState } from 'react'

// MUI Imports
import { useParams } from 'next/navigation';

import type { ColumnDef} from '@tanstack/react-table';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Card from '@mui/material/Card'
import uuid from 'react-native-uuid'

import type { ButtonProps } from '@mui/material'
import { Button, CardHeader, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardContent, Link } from '@mui/material'

import styles from '@core/styles/table.module.css'

// Styled Component Imports
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'

import { LabOrderContext } from '..'

import AddCptDetails from '../dialogs/AddCptDetails'

import type { LabOrderCptWithPartialRelations } from '~prisma/generated/zod'
import { getLocalizedUrl } from '@/utils/i18n';
import type { Locale } from '@configs/i18n'


const columnHelper = createColumnHelper<LabOrderCptWithPartialRelations>()


const CptDetails = () => {

  // States
  const { labOrder, setLabOrder } = useContext(LabOrderContext)

  const { lang: locale } = useParams()

  const [data, setData] = useState(labOrder.LabOrderCpt ?? [] as LabOrderCptWithPartialRelations[])
  const [deleteId, setDeleteId] = useState(undefined as string | undefined)
  const [open, setOpen] = useState(false)

  const getEmptyCptRecord = () => {
    return {
      Id: uuid.v4(),
      LabOrderId: labOrder.Id,
      CPTCode: undefined,
      ICDCodes: undefined
    } as unknown as LabOrderCptWithPartialRelations
  }

  const [emptyCptRecord, setEmptyCptRecord] = useState<LabOrderCptWithPartialRelations>(getEmptyCptRecord())

  const renderOpenDialog = () => {
    return (
      <OpenDialogOnElementClick
        element={Button}
        elementProps={buttonProps}
        dialog={AddCptDetails}
        dialogProps={{ cptRecord: emptyCptRecord }}
      />
    )
  }

  const handleOpen = (id: string) => {
    // console.log('Deleting with id: ', id)
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

    labOrderCopy.LabOrderCpt = updatedData

    setData(updatedData)

    // Update labOrder
    setLabOrder(labOrderCopy)

    // console.log('labOrder: ', labOrder)
    setOpen(false)
  }

  const columns: ColumnDef<LabOrderCptWithPartialRelations, any>[] = [
    columnHelper.accessor('CPTCode', {
      cell: info => info.getValue(),
      header: 'CPT Code'
    }),
    columnHelper.accessor(row => row.ICDCodes, {
      cell: info => info.getValue(),
      header: 'ICD Codes'
    }),
    columnHelper.accessor('Id', {
      header: 'Action',
      cell: (info) => (
        <div className='flex items-center'>
          <IconButton onClick={() => handleOpen(info.row.original.Id ?? 0)}>
            <i className='ri-delete-bin-7-line text-[22px] text-textSecondary' />
          </IconButton>
          <IconButton>
              <Link
                href={getLocalizedUrl(`apps/laborders/edit/${info.row.original.Id}`, locale as Locale)}
                className='flex'
              >
                <i className='ri-edit-box-line text-[22px] text-textSecondary' />
              </Link>
            </IconButton>
        </div>
      ),
      enableSorting: false
    })
  ]

  // Hooks
  const table = useReactTable({
    data: data as LabOrderCptWithPartialRelations[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    },
  })

  useEffect(() => {
    if (labOrder.LabOrderCpt) {
      // console.log('labOrder.LabOrderCpt', labOrder.LabOrderCpt)

      setData(labOrder.LabOrderCpt)

      // console.log('data', data)
    }
  }, [labOrder, data, setData])

  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: '+Add CPT Codes',
    onClick: () => {
      setEmptyCptRecord(getEmptyCptRecord())
    }
  }

  return (
    <>
      <Card>
        <CardHeader

          // avatar={<i className='ri-test-tube-line text-3xl text-primary' />}
          // title={
          //   <Typography variant='h5' className='text-primary'>
          //     CPT Codes
          //   </Typography>
          // }
          className='items-start sm:flex-row sm:items-center'
          sx={{ '& .MuiCardHeader-action': { m: 0 }, '& .MuiCardHeader-avatar': { mr: 0 } }}
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
                      No CPT Codes are added
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

export default CptDetails
