'use client'

// React Imports
import { useState } from 'react'

import { useRouter } from 'next/navigation';


import Card from '@mui/material/Card'

// Component Imports
import { createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'

import type { ButtonProps } from '@mui/material';
import { Button, CardHeader, CircularProgress, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import TablePagination from '@mui/material/TablePagination'

import { api } from '~trpc/react';

// import IconButton from '@mui/material/IconButton'


// Third-party Imports


import styles from '@core/styles/table.module.css'

// Data Imports
import type { LOINC, TestResultLoincPartialWithRelations } from '~prisma/generated/zod'

import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick';
import AddLoincCode from '@/components/dialogs/add-loinc-code';
import { useTestData } from '..';


// Column Definitions
const columnHelper = createColumnHelper<TestResultLoincPartialWithRelations>()



const ResultLoincCard = () => {
  const router = useRouter()
  const { testData } = useTestData()

  // States
  const [data, setData] = useState(() => testData.TestResultLoinc || [])
  const [deleteId, setDeleteId] = useState(undefined as number | undefined);
  const [open, setOpen] = useState(false);

  const createResultLoinc = api.loinc.addResultLoinc.useMutation()
  const deleteResultLoinc = api.loinc.deleteResultLoinc.useMutation();

  const handleOpen = (id: number) => {
    console.log('Deleting with id: ', id);
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const whereClause = { where: { Id: deleteId } }

    deleteResultLoinc.mutate(whereClause, {
      onSuccess: () => {
        setData(data.filter(item => item.Id !== deleteId));
        router.refresh();
      },
    });
    setOpen(false);
  };

  const handleSave = (selectedLoinc: LOINC) => {
    if (selectedLoinc) {
      console.log('Selected Value', selectedLoinc);

      const newData: any = {
        TestId: testData.TestId,
        LabTestId: testData.LabTestId,
        ResultLoinc: selectedLoinc.Loinc_Num,
      }

      createResultLoinc.mutate(newData, {
        onSuccess: (newData) => {
          console.log('Returned data:', newData)

          const updatedData = {
            ...newData,
            LOINC: selectedLoinc,
          }

          setData(data => [...data, updatedData as TestResultLoincPartialWithRelations])

          // setHasMutated(true) // Set hasMutated to true after the mutation
          router.refresh()
        },
      })
    }
  }


  const columns = [
    columnHelper.accessor('ResultLoinc', {
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
    columnHelper.accessor('ResultCode', {
      cell: info => info.getValue() ?? 'N/A',
      header: 'Result Code'
    }),
    columnHelper.accessor('ResultCodeName', {
      cell: info => info.getValue() ?? 'N/A',
      header: 'Result Code Name'
    }),
    columnHelper.accessor('UofM', {
      cell: (info) => (
        <div style={{ maxWidth: '10px' }}>
          {info.row.original.UofM ?? 'N/A'}
        </div>
      ),
      header: 'UoM'
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
    initialState: {
      pagination: {
        pageSize: 100
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    filterFns: {
      fuzzy: () => false
    },
  })

  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Add Result Loinc',
  }

  return (
    <>
      <Card>
        <CardHeader
          title='Result LOINC codes'
          className='gap-2 flex-col items-start sm:flex-row sm:items-center'
          sx={{ '& .MuiCardHeader-action': { m: 0 } }}
          action={!createResultLoinc.isLoading && <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddLoincCode} dialogProps={{ onValueChange: handleSave }} />}
        />
        {createResultLoinc.isLoading && <CircularProgress />}
        {!createResultLoinc.isLoading &&
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
                  .rows.slice(0, table.getState().pagination.pageSize)
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
        {data.length > 100 &&
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component='div'
            className='border-bs'
            count={table.getFilteredRowModel().rows.length}
            rowsPerPage={table.getState().pagination.pageSize}
            page={table.getState().pagination.pageIndex}
            SelectProps={{
              inputProps: { 'aria-label': 'rows per page' }
            }}
            onPageChange={(_, page) => {
              table.setPageIndex(page)
            }}
            onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
          />
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

export default ResultLoincCard
