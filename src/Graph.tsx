import React, { useEffect } from 'react'
import Chart from 'chart.js'
import styled from '@emotion/styled'

type GraphProps = {
  lines: string[]
  labels: string[]
  data: number[][]
  yAxis: string
}

type Dataset = {
  label: string
  data: number[]
  showLine: boolean
  fill: boolean
  borderColor: string
}

const colorblindSafePalette = [
  `#CC6677`,
  `#332288`,
  `#DDCC77`,
  `#117733`,
  `#88CCEE`,
  `#882255`,
  `#44AA99`,
  `#999933`,
  `#AA4499`,
]

const GraphContainer = styled.div({
  'position': `relative`,
  'height': `600px`,
  'width': `1000px`,
  '@media (max-width: 1400px)': {
    width: `600px`,
  },
  '@media (max-width: 1050px)': {
    width: `700px`,
    height: `380px`,
  },
  '@media (max-width: 840px)': {
    height: `380px`,
    width: `500px`,
  },
  '@media (max-width: 580px)': {
    height: `380px`,
    width: `350px`,
    margin: `0px`,
  },
})

// Bottom level component for a Graph - actually renders it!
const Graph = (props: GraphProps) => {
  const graphRef = React.createRef<HTMLCanvasElement>()

  useEffect(() => {
    const myChartRef = graphRef?.current?.getContext('2d')
    const datasets: Dataset[] = props.data.map((dataset, index) => {
      return {
        label: props.lines[index],
        data: dataset,
        showLine: true,
        fill: false,
        borderColor: colorblindSafePalette[index],
      }
    })
    if (myChartRef) {
      new Chart(myChartRef, {
        type: 'line',
        data: {
          labels: props.labels,
          datasets,
        },
        options: {
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          responsive: true,
          maintainAspectRatio: false,
          hover: {
            mode: 'nearest',
            intersect: true,
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: props.yAxis,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: `Year`,
                },
              },
            ],
          },
        },
      })
    }
  }, [])

  return (
    <GraphContainer>
      <canvas id={`my${props.yAxis}Graph`} ref={graphRef} role='img' aria-label={`${props.yAxis} graph`} />
    </GraphContainer>
  )
}

export default Graph
