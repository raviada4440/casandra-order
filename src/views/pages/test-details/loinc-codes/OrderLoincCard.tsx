'use client'

// React Imports
import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { toast } from 'react-toastify'


import Card from '@mui/material/Card'

// Component Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import type { ButtonProps } from '@mui/material'
import { Button, CardHeader, CircularProgress, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material'

import { api } from '~trpc/react'


// Third-party Imports


import styles from '@core/styles/table.module.css'

// Data Imports
import type { LOINC, TestOrderLoincPartialWithRelations } from '~prisma/generated/zod'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'
import AddLoincCode from '@/components/dialogs/add-loinc-code'
import { useTestData } from '..'


// Column Definitions
const columnHelper = createColumnHelper<TestOrderLoincPartialWithRelations>()

const OrderLoincCard = () => {
  const router = useRouter()
  const { testData } = useTestData()

  // States
  const [data, setData] = useState(() => testData.TestOrderLoinc || [])
  const [deleteId, setDeleteId] = useState(undefined as number | undefined)
  const [open, setOpen] = useState(false)

  const createOrderLoinc = api.loinc.addOrderLoinc.useMutation()
  const deleteOrderLoinc = api.loinc.deleteOrderLoinc.useMutation()

  const handleOpen = (id: number) => {
    console.log('Deleting with id: ', id)
    setDeleteId(id)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    const whereClause = { where: { Id: deleteId } }

    deleteOrderLoinc.mutate(whereClause, {
      onSuccess: () => {
        setData(data.filter(item => item.Id !== deleteId))
        router.refresh()
      },
    })
    setOpen(false)
  }

  const handleSave = (selectedLoinc: LOINC) => {
    if (selectedLoinc) {
      console.log('Selected Value', selectedLoinc)

      const newData: any = {
        TestId: testData.TestId,
        LabTestId: testData.LabTestId,
        OrderLoinc: selectedLoinc.Loinc_Num,
      }

      createOrderLoinc.mutate(newData, {
        onSuccess: (newData) => {
          console.log('Returned data:', newData)

          const updatedData = {
            ...newData,
            LOINC: selectedLoinc,
          }

          setData(data => [...data, updatedData as TestOrderLoincPartialWithRelations])

          router.refresh()
        },
        onError: (error) => {
          toast.error('Failed to create with error: ' + error.message)
        },
      })
    }
  }


  const columns = [
    columnHelper.accessor('OrderLoinc', {
      cell: info => info.getValue(),
      header: 'Code'
    }),
    columnHelper.accessor('LOINC.COMPONENT', {
      cell: info => info.getValue(),
      header: 'Component'
    }),
    columnHelper.accessor('LOINC.ORDER_OBS', {
      cell: info => info.getValue(),
      header: 'Order/Obs'
    }),
    columnHelper.accessor('LOINC.COMMON_TEST_RANK', {
      cell: (info) => (
        <div style={{ minWidth: '50px' }}>
          {info.row.original.LOINC?.COMMON_TEST_RANK ?? 'N/A'}
        </div>
      ),
      header: 'Test Rank'
    }),
    columnHelper.accessor('LOINC.COMMON_ORDER_RANK', {
      cell: (info) => (
        <div style={{ minWidth: '50px' }}>
          {info.row.original.LOINC?.COMMON_ORDER_RANK ?? 'N/A'}
        </div>
      ),
      header: 'Order Rank'
    }),
    columnHelper.accessor('action', {
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
    children: 'Add Order Loinc',
  }

  return (
    <>
      <Card>
        <CardHeader
          title='Order LOINC codes'
          className='gap-2 flex-col items-start sm:flex-row sm:items-center'
          sx={{ '& .MuiCardHeader-action': { m: 0 } }}
          action={!createOrderLoinc.isLoading && <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddLoincCode} dialogProps={{ onValueChange: handleSave }} />}
        />
        {createOrderLoinc.isLoading && <CircularProgress />}
        {!createOrderLoinc.isLoading &&
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
            </table>
          </div>
        }
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

export default OrderLoincCard
