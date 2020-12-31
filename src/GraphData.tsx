import React from 'react'
import Graph from './Graph'
import { DataContainer } from './sharedComponents'
import { removeDuplicatesAndSort, DataRow, formatGraphData } from './sharedUtilities'

export type DataPointDict = {
  [year: string]: number
}

export type DataDict = {
  [county: string]: DataPointDict
}

type GraphDataProps = {
  data: DataRow[]
  yAxis: string
}

// Mid-level component for a graph, does all the required data manipulation
const GraphData = (props: GraphDataProps) => {
  // Array of counties, alphabetical
  const lines = removeDuplicatesAndSort(props.data.map((item: DataRow) => item.county) ?? [])

  // Array of years, sorted
  const labels = removeDuplicatesAndSort(props.data.map((item: DataRow) => item.year) ?? [])

  // First build dict of data by county, then year
  const dataDict: DataDict = {}
  props.data.forEach((item: DataRow) => {
    if (dataDict[item.county] === undefined) dataDict[item.county] = {}
    dataDict[item.county][item.year] = item.data_point
  })

  // Use dict to build 2D array of life expectancy numbers - sorted first by county and then by year
  const graphData: number[][] = formatGraphData(lines, labels, dataDict)

  return (
    <>
      <DataContainer>
        <Graph data={graphData} lines={lines} labels={labels} yAxis={props.yAxis} />
      </DataContainer>
    </>
  )
}

export default GraphData
