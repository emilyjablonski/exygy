import React from 'react'
import { TableContainer } from './sharedComponents'
import { DataRow, tableOptions } from './sharedUtilities'
import MUIDataTable from 'mui-datatables'

type TableProps = {
  data: DataRow[]
  tableTitle: string
  tableDataPointTitle: string
}

// Receives data and renders a mui-datatables table using the shared config
const Table = (props: TableProps) => {
  const columns = [
    {
      name: 'county',
      label: 'County',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'year',
      label: 'Year',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: props.tableDataPointTitle,
      label: props.tableDataPointTitle,
      options: {
        filter: false,
        sort: true,
      },
    },
  ]

  let tableData: string[][] = []
  props.data.forEach(item => {
    tableData.push([item.county, item.year, item.data_point.toString()])
  })

  return (
    <TableContainer>
      <MUIDataTable title={props.tableTitle} data={tableData} columns={columns} options={tableOptions} />
    </TableContainer>
  )
}

export default Table
