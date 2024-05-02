'use client'

// React Imports
import { useState } from 'react'

import { useRouter } from 'next/navigation';


import Card from '@mui/material/Card'

// Component Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import type { ButtonProps } from '@mui/material';
import { Button, CardHeader, CircularProgress, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material'

import { api } from '~trpc/react';


// Third-party Imports


import styles from '@core/styles/table.module.css'

// Data Imports
import type { TestCptCodePartialWithRelations } from '~prisma/generated/zod'

import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick';
import AddCptCode from '@/components/dialogs/add-cpt-code';
import { useTestData } from '..';


// Column Definitions
const columnHelper = createColumnHelper<TestCptCodePartialWithRelations>()

const CptCodesCard = () => {
  const router = useRouter();
  const { testData } = useTestData()

  // States
  const [data, setData] = useState(() => testData.TestCptCode || [])
  const [deleteId, setDeleteId] = useState(undefined as number | undefined);
  const [open, setOpen] = useState(false);

  const createCptCode = api.cpt.addCptCode.useMutation();
  const deleteCptCode = api.cpt.deleteCptCode.useMutation();

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

    deleteCptCode.mutate(whereClause, {
      onSuccess: () => {
        setData(data.filter(item => item.Id !== deleteId));
        router.refresh();
      },
    });
    setOpen(false);
  };


  const handleSave = (selectedCpt: any) => {
    if (selectedCpt) {
      selectedCpt.TestId = testData.TestId
      selectedCpt.LabTestId = testData.LabTestId

      console.log('Selected Value', selectedCpt)

      createCptCode.mutate(selectedCpt, {
        onSuccess: (newCptData) => {
          console.log('Returned data:', newCptData);

          setData(data => [...data, newCptData as TestCptCodePartialWithRelations]);

          router.refresh();
        },
      });
    }
  }


  const columns = [
    columnHelper.accessor('CptCode', {
      cell: info => info.getValue(),
      header: 'Code'
    }),
    columnHelper.accessor('Modifier', {
      cell: info => info.getValue(),
      header: 'Modifier'
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
    children: 'Add CPT Code',
  }

  return (
    <>
      <Card>
        <CardHeader
          title='CPT Codes'
          className='gap-2 flex-col items-start sm:flex-row sm:items-center'
          sx={{ '& .MuiCardHeader-action': { m: 0 } }}
          action={!createCptCode.isLoading && <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddCptCode} dialogProps={{ onValueChange: handleSave }} />}
        />
        {createCptCode.isLoading && <CircularProgress />}
        {!createCptCode.isLoading &&
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

export default CptCodesCard
