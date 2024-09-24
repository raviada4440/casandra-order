// React Imports
import { useContext, useEffect, useMemo, useState } from 'react'

// MUI Imports
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel
} from '@tanstack/react-table'

import type {
  ColumnDef,
  ExpandedState
} from '@tanstack/react-table'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import uuid from 'react-native-uuid'

import type { ButtonProps } from '@mui/material'
import { Button, CardHeader, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardContent } from '@mui/material'

import classnames from 'classnames'

import tableStyles from '@core/styles/table.module.css'


// Styled Component Imports
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'

import { LabOrderContext } from '..'

import AddCptDetails from '../dialogs/AddCptDetails'

import type { LabOrderCptWithPartialRelations, LabOrderIcdWithPartialRelations } from '~prisma/generated/zod'


const columnHelper = createColumnHelper<any>()


const CptDetails = () => {

  // States
  const { labOrder, setLabOrder } = useContext(LabOrderContext)

  const [data, setData] = useState(labOrder.LabOrderCpt ?? [] as LabOrderCptWithPartialRelations[])
  const [deleteId, setDeleteId] = useState(undefined as string | undefined)
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const getEmptyCptRecord = () => {
    return {
      Id: uuid.v4(),
      LabOrderId: labOrder.Id,
      CPTCode: undefined,
      LabOrderIcd: [] as LabOrderIcdWithPartialRelations[],
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

  const columns = useMemo<ColumnDef<any, any>[]>(
    () => [
      columnHelper.accessor('CPTCode', {
        header: 'CPT Code',
        enableColumnFilter: false,
        enableGlobalFilter: false,
        size: 450,
        cell: ({ row }) => (
          <div
            style={{
              // Since rows are flattened by default,
              // we can use the row.depth property
              // and paddingLeft to visually indicate the depth
              // of the row
              paddingLeft: `${row.depth * 2}rem`,
              minHeight: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: { cursor: 'pointer', backgroundColor: 'transparent' },
                  }}
                >
                  {row.getIsExpanded() ? <i className='ri-arrow-down-s-line text-2xl' /> : <i className='ri-arrow-right-s-line text-2xl' />}
                </button>
              ) : (
                ''
              )}{' '}
              <Typography>{`${row.original.CPTCode}`}</Typography>
            </div>
          </div>

        )
      }),
      columnHelper.accessor(row => row.ICDCode, {
        cell: info => info.getValue(),
        header: 'ICD Code'
      }),
      columnHelper.accessor(row => row.Desc, {
        cell: info => info.getValue(),
        header: 'Short Description'
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
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )



  // Hooks
  const table = useReactTable({
    data: data as LabOrderCptWithPartialRelations[],
    columns,
    state: {
      expanded
    },
    getCoreRowModel: getCoreRowModel(),
    onExpandedChange: setExpanded,
    getSubRows: (row) =>
      row.LabOrderIcd?.map((icd: LabOrderIcdWithPartialRelations) => ({
        CPTCode: row.CPTCode,
        ICDCode: icd.ICD?.Code,
        Desc: icd.ICD?.ShortDescription,
        LabOrderIcd: []
      })),
    getExpandedRowModel: getExpandedRowModel(),
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
          avatar={<i className='ri-test-tube-line text-3xl text-primary' />}
          title={
            <Typography variant='h5' className='text-primary'>
              CPT Codes
            </Typography>
          }
          className='items-start sm:flex-row sm:items-center'
          sx={{ '& .MuiCardHeader-action': { m: 0 }, '& .MuiCardHeader-avatar': { mr: 0 } }}
          action={renderOpenDialog()}
        />
        <CardContent>
          <div className='overflow-x-auto mb-20'>
          <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: `${header.getSize()}px` }}
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={classnames({
                            'flex items-center': header.column.getIsSorted(),
                            'cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <i className='ri-arrow-up-s-line text-xl' />,
                            desc: <i className='ri-arrow-down-s-line text-xl' />
                          }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => {
                  return (
                    <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
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


