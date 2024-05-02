'use client'

// React Imports
import { useState } from 'react'

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify'


import Card from '@mui/material/Card'

// Component Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import type { ButtonProps } from '@mui/material';
import { Button, CardHeader, CircularProgress, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material'

import { api } from '~trpc/react';


// Third-party Imports


import styles from '@core/styles/table.module.css'

// Data Imports
import type { BIOMARKER, TestBiomarkerPartialWithRelations } from '~prisma/generated/zod'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick';
import { useTestData } from '..';
import AddBiomarker from '@components/dialogs/add-biomarker';


// Column Definitions
const columnHelper = createColumnHelper<TestBiomarkerPartialWithRelations>()

const BiomarkerCard = () => {
  const router = useRouter();
  const { testData } = useTestData()

  // States
  const [data, setData] = useState(() => testData.TestBiomarker || [])
  const [deleteId, setDeleteId] = useState(undefined as number | undefined);
  const [open, setOpen] = useState(false);

  const createOrderLoinc = api.biomarker.addOrderLoinc.useMutation();
  const deleteOrderLoinc = api.biomarker.deleteOrderLoinc.useMutation();

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

    deleteOrderLoinc.mutate(whereClause, {
      onSuccess: () => {
        setData(data.filter(item => item.Id !== deleteId));
        router.refresh();
      },
    });
    setOpen(false);
  };

  const handleSave = (selectedBiomarker: BIOMARKER) => {
    if (selectedBiomarker) {
      console.log('Selected Value', selectedBiomarker);

      const newData: any = {
        TestId: testData.TestId || 0,
        LabTestId: testData.LabTestId || null,
        HGNCId: selectedBiomarker.HGNCId,
      }

      createOrderLoinc.mutate(newData, {
        onSuccess: (newData) => {
          console.log('Returned data:', newData);

          const updatedData = {
            ...newData,
            BIOMARKER: selectedBiomarker,
          }

          setData(data => [...data, updatedData as TestBiomarkerPartialWithRelations]);

          router.refresh();
        },
        onError: (error) => {
          toast.error('Failed to create with error: ' + error.message);
        },
      });
    }
  }


  const columns = [
    columnHelper.accessor('BIOMARKER.HGNCId', {
      cell: info => info.getValue(),
      header: 'Hugo Code'
    }),
    columnHelper.accessor('BIOMARKER.HGNCApprovedSymbol', {
      cell: info => info.getValue(),
      header: 'Biomarker'
    }),
    columnHelper.accessor('BIOMARKER.HGNCApprovedName', {
      cell: info => info.getValue(),
      header: 'Name'
    }),
    columnHelper.accessor('BIOMARKER.HGNCStatus', {
      cell: info => info.getValue(),
      header: 'Status'
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
          title='Biomarkers'
          className='gap-2 flex-col items-start sm:flex-row sm:items-center'
          sx={{ '& .MuiCardHeader-action': { m: 0 } }}
          action={!createOrderLoinc.isLoading && <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddBiomarker} dialogProps={{ onValueChange: handleSave }} />}
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

export default BiomarkerCard
