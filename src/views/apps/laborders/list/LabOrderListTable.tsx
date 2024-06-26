'use client'

// React Imports
import { useState, useMemo, useEffect } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// import IconButton from '@mui/material/IconButton'
import TablePagination from '@mui/material/TablePagination'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { Column, ColumnDef, ColumnFiltersState, FilterFn, Row, Table } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Type Imports
import { TextField, type TextFieldProps } from '@mui/material';

import { makeStyles } from '@mui/styles'

import type { Locale } from '@configs/i18n'


// Component Imports
// import OptionMenu from '@core/components/option-menu'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

import type { CustomLabOrderType } from '@server/api/routers/laborder'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'


declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const useStyles = makeStyles({
  cell50: {
    maxWidth: 50,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cell75: {
    maxWidth: 75,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cell100: {
    maxWidth: 100,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cell150: {
    maxWidth: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cell250: {
    maxWidth: 250,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  cell450: {
    maxWidth: 450,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const Filter = ({ column, table }: { column: Column<any, unknown>; table: Table<any> }) => {
  // Vars
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return firstValue && typeof firstValue === 'number' ? (
    <div className='flex gap-x-2'>
      <TextField
        fullWidth
        type='number'
        size='small'
        sx={{ minInlineSize: 100, maxInlineSize: 125 }}
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={e => column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])}
        placeholder={`Min ${column.getFacetedMinMaxValues()?.[0] ? `(${column.getFacetedMinMaxValues()?.[0]})` : ''}`}
      />
      <TextField
        fullWidth
        type='number'
        size='small'
        sx={{ minInlineSize: 100, maxInlineSize: 125 }}
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={e => column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])}
        placeholder={`Max ${column.getFacetedMinMaxValues()?.[1] ? `(${column.getFacetedMinMaxValues()?.[1]})` : ''}`}
      />
    </div>
  ) : (
    <TextField
      fullWidth
      size='small'
      sx={{ minInlineSize: 100 }}
      value={(columnFilterValue ?? '') as string}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder='Search...'
    />
  )
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

const customFilterFn: FilterFn<any> = (row: Row<any>, columnId: string, filterValue: any) => {
  const words = filterValue.split(/\s+/)
  const regexes = words.map((word: string | RegExp) => new RegExp(word, 'i'))

  return regexes.every((regex: { test: (arg0: any) => any }) => regex.test(row.getValue(columnId)))
}


type CustomLabOrderTypeWithAction = CustomLabOrderType & {
  action?: string
}

// Column Definitions
const columnHelper = createColumnHelper<CustomLabOrderTypeWithAction>()


const LabOrderListTable = ({ labOrdersData, columnFiltersData }: { labOrdersData: CustomLabOrderType[], columnFiltersData: ColumnFiltersState }) => {

  // States
  // const [lab, setLab] = useState<Lab | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[labOrdersData])

  // const [labs, setLabs] = useState(...[labsData])

  const [globalFilter, setGlobalFilter] = useState('')
  const { updateSettings } = useSettings()
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(columnFiltersData)

  // Hooks
  const { lang: locale } = useParams()

  const classes = useStyles();

  // href={getLocalizedUrl(`/apps/laborders/edit/${row.original.Id}`, locale as Locale)}

  const columns = useMemo<ColumnDef<CustomLabOrderTypeWithAction, any>[]>(
    () => [
      columnHelper.accessor('OrderNumber', {
        header: 'Order Number',
        enableColumnFilter: true,
        enableGlobalFilter: false,
        cell: ({ row }) => (
          <Typography
            onClick={() => updateSettings({ columnFilters: table.getState().columnFilters })}
            component={Link}
            href="#"
            color='primary'
          >{`${row.original.OrderNumber}`}</Typography>
        )
      }),
      columnHelper.accessor('OrderDate', {
        header: 'Order Date',
        filterFn: customFilterFn,
        cell: ({ row }) => {
          let formattedDate = '';

          if (row.original.OrderDate) {
            // Convert the OrderDate to a Date object
            const orderDate = new Date(row.original.OrderDate);

            // Format the date to mm/dd/yyyy
            formattedDate = `${orderDate.getMonth() + 1}/${orderDate.getDate()}/${orderDate.getFullYear()}`;
          }

          return (
            <div className={`${classes.cell100}`}>
              <Typography className={`${classes.cell100} font-medium`} color='text.primary'>
                {`${formattedDate}`}
              </Typography>
            </div>
          )
        }
      }),
      columnHelper.accessor('PatientMRN', {
        header: 'MRN',
        filterFn: customFilterFn,
        cell: ({ row }) => <Typography className={`${classes.cell150}`}>{`${row.original.PatientMRN}`}</Typography>
      }),
      columnHelper.accessor('PatientName', {
        header: 'Patient Name',
        cell: ({ row }) => <Typography className={`${classes.cell250}`}>{row.original.PatientName}</Typography>
      }),
      columnHelper.accessor('AccessionNumber', {
        header: 'Accession',
        cell: ({ row }) => <Typography className={`${classes.cell75}`}>{row.original.AccessionNumber}</Typography>
      }),
      columnHelper.accessor('OrderingPhysician', {
        header: 'Ordering Physician',
        cell: ({ row }) => <Typography className={`${classes.cell250}`}>{row.original.OrderingPhysician}</Typography>
      }),
      columnHelper.accessor('Status', {
        header: 'Status',
        cell: ({ row }) => <Typography className={`${classes.cell150}`}>{row.original.Status}</Typography>
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data as CustomLabOrderType[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      columnFilters,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 50
      }
    },
    defaultColumn: {
      size: 5, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 400, //enforced during column resizing
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  useEffect(() => {
    // const filteredData = labOrdersData?.filter(test => {
    //   if (lab && lab.LabId && lab.LabId > 0 && test.LabId !== lab.LabId) return false

    //   return true
    // })

    setData(labOrdersData)

  }, [labOrdersData, setData])

  return (
    <Card>
      <CardContent className='flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center'>
      <div className='flex flex-col sm:flex-row is-full sm:is-auto items-center gap-2'>
        <Button
          variant='contained'
          component={Link}
          startIcon={<i className='ri-add-line' />}
          href={getLocalizedUrl('/apps/laborders/add', locale as Locale)}
          className='is-full sm:is-auto'
        >
          New Order
        </Button>
        <Button
          variant='contained'
          component={Link}
          startIcon={<i className='ri-add-line' />}
          href={getLocalizedUrl('/apps/laborders/add', locale as Locale)}
          className='is-full sm:is-auto'
        >
          New Order V2
        </Button>
        </div>
        <div className='flex flex-col sm:flex-row is-full sm:is-auto items-center gap-4'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Tests'
            className='is-full sm:is-auto min-is-[200px]'
          />
          {/* <AutocompleteLab onValueChange={(newValue) => setLab(newValue || {} as Lab)} /> */}
        </div>
      </CardContent>
      <div className='overflow-x-auto'>
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
                        {header.column.getCanFilter() && <Filter column={header.column} table={table} />}
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
    </Card>
  )
}

export default LabOrderListTable
