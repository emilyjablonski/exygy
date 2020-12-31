import { Responsive, FilterType, SelectableRows } from 'mui-datatables'

export type DataRow = {
  county: string
  year: string
  data_point: number
}

export type DataPointDict = {
  [year: string]: number
}

export type DataDict = {
  [county: string]: DataPointDict
}

// Takes in a string list, returns an alphabetically sorted string list with all duplicates removed
export const removeDuplicatesAndSort = (input: string[]) => {
  return input?.filter((line, index) => input.indexOf(line) == index).sort() ?? []
}

// lines: string[], representing the lines that will be plotted (counties)
// labels: string[], representing x-axis intervals (years)
// dataDict:  [county: string]: [year: string]: number, a dictionary of the input data
// Returns a 2D number array, of the data first by county then by year
export const formatGraphData = (lines: string[], labels: string[], dataDict: DataDict) => {
  const graphData: number[][] = []
  lines?.forEach(line => {
    const dataArray: number[] = []
    labels?.forEach(label => {
      dataArray.push(dataDict[line][label])
    })
    graphData.push(dataArray)
  })
  return graphData
}

// Options object used by mui-datatables
export const tableOptions = {
  filter: true,
  filterType: `checkbox` as FilterType,
  download: true,
  tableBodyHeight: `400px`,
  selectableRows: `none` as SelectableRows,
  responsive: `simple` as Responsive,
  toolbar: {
    search: 'Search',
    downloadCsv: 'Download CSV',
    print: 'Print',
    viewColumns: 'View Columns',
    filter: 'Filter Table',
  },
}
