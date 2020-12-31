import React, { useEffect, useState } from 'react'
import GraphData from './GraphData'
import { each } from 'lodash'
import {
  GeneralBayBackground,
  SantaClaraBackground,
  ContentContainer,
  TextContainer,
  TextHeader,
  LineBreak,
} from './sharedComponents'
import { DataRow } from './sharedUtilities'
import Table from './Table'

// Top-level component for a Graph and a Table, fetches the data
const CountyRent = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState<DataRow[]>()
  const [error, setError] = useState(undefined)

  type RentData = {
    year: string
    county: string
    median_list_rent: number
  }

  // Fetch the data once on page load
  useEffect(() => {
    fetch('https://data.bayareametro.gov/resource/pi7c-rw8i.json')
      .then(res => res.json())
      .then(
        result => {
          each(result, item => {
            item.median_list_rent = parseFloat(item.median_list_rent)
          })
          const data: DataRow[] = result.map((item: RentData) => {
            return {
              county: item.county,
              year: item.year,
              data_point: item.median_list_rent,
            }
          })
          setItems(data)
          setIsLoaded(true)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  return (
    <>
      <GeneralBayBackground>
        <ContentContainer>
          {/* Given more time, I would have pulled in a spicier loading animation, and displayed any api errors */}
          {isLoaded ? <GraphData data={items ?? []} yAxis={`Median Rent ($)`} /> : <>Loading...</>}
          <TextContainer>
            <TextHeader>MEDIAN RENT</TextHeader>
            The graph to the left displays the median rent in years over time in various Bay Area counties. Note that
            the top 4 counties for highest rent are San Francisco, San Mateo, Santa Clara, and Marin (in that order).
            They're the same top four counties for life expectancy.
            <br />
            <LineBreak />
            Unfortunately, it seems like years of life have an economic correlation. Some have theorized this could be
            the result of differences in economic stress or access to medical care.
          </TextContainer>
        </ContentContainer>
      </GeneralBayBackground>
      <SantaClaraBackground>
        <Table data={items ?? []} tableTitle={`Median Rent by County`} tableDataPointTitle={`Median Rent`} />
      </SantaClaraBackground>
    </>
  )
}

export default CountyRent
