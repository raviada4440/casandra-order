// React Imports
import { useContext, useEffect, useState } from 'react'

// MUI Imports
import type { ColumnDef} from '@tanstack/react-table';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Card from '@mui/material/Card'
import uuid from 'react-native-uuid'

import type { ButtonProps } from '@mui/material'
import { Button, CardHeader, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardContent } from '@mui/material'

import styles from '@core/styles/table.module.css'

// Styled Component Imports
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'

import { LabOrderContext } from '..'

import AddCptDetails from '../dialogs/AddCptDetails'

import type { ICD, LabOrderCptWithPartialRelations, LabOrderCptWithRelations } from '~prisma/generated/zod'


const columnHelper = createColumnHelper<LabOrderCptWithPartialRelations>()


const CptDetails = () => {

  // States
  const { labOrder, setLabOrder } = useContext(LabOrderContext)

  const [data, setData] = useState(labOrder.LabOrderCpt ?? [] as LabOrderCptWithPartialRelations[])
  const [selectedRecord, setSelectedRecord] = useState(undefined as LabOrderCptWithPartialRelations | undefined)
  const [deleteId, setDeleteId] = useState(undefined as string | undefined)
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const getEmptyCptRecord = () => {
    return {
      Id: uuid.v4(),
      LabOrderId: labOrder.Id,
      CPTCode: undefined,
      ICDCodes: undefined
    } as unknown as LabOrderCptWithPartialRelations
  }

  const findRecordById = (id: string): LabOrderCptWithPartialRelations => {
    const labOrderCpt = data.find(record => record.Id === id)

    console.log('labOrderCpt: ', labOrderCpt)

    return labOrderCpt ?? getEmptyCptRecord()
  };

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

  const handleEditCptCode = (id: string) => {
    setEditOpen(true)
    setSelectedRecord(findRecordById(id))
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
      cell: info => {
        const icdCodesArray = info.getValue();

        if (icdCodesArray && icdCodesArray.length > 0) {
          const jsonArrayIcdCodes: ICD[] = JSON.parse(icdCodesArray)

          return jsonArrayIcdCodes.map(icd => icd.Code).join(', ');
        }

        return '';
      },
      header: 'ICD Codes'
    }),
    columnHelper.accessor('Id', {
      header: 'Action',
      cell: (info) => (
        <div className='flex items-center'>
          <IconButton onClick={() => handleOpen(info.row.original.Id ?? '')}>
            <i className='ri-delete-bin-7-line text-[22px] text-textSecondary' />
          </IconButton>
          <IconButton onClick={() => handleEditCptCode(info.row.original.Id)}>
              <i className='ri-edit-box-line text-[22px] text-textSecondary' />
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
      <AddCptDetails open={editOpen} setOpen={setEditOpen} cptRecord={selectedRecord as LabOrderCptWithRelations} />

    </>
  )

}

export default CptDetails
