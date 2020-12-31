import React, { useEffect, useState } from 'react'
import GraphData from './GraphData'
import { each } from 'lodash'
import {
  ContentContainer,
  SanMateoBackground,
  SolanoCountyBackground,
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
  // const [error, setError] = useState(undefined)

  type RentData = {
    year: string
    county: string
    life_expectancy: number
  }

  // Fetch the data once on page load
  useEffect(() => {
    fetch('https://data.bayareametro.gov/resource/g26a-g4jw.json')
      .then(res => res.json())
      .then(
        result => {
          each(result, item => {
            item.life_expectancy = parseFloat(item.life_expectancy)
          })
          const data: DataRow[] = result.map((item: RentData) => {
            return {
              county: item.county,
              year: item.year,
              data_point: item.life_expectancy,
            }
          })
          setItems(data)
          setIsLoaded(true)
        }
        // error => {
        //   setIsLoaded(true)
        //   setError(error)
        // }
      )
  }, [])

  return (
    <>
      <SolanoCountyBackground>
        <ContentContainer>
          {/* Given more time, I would have pulled in a spicier loading animation, and displayed any api errors */}
          {isLoaded ? <GraphData data={items ?? []} yAxis={`Life Expectancy (Years)`} /> : <>Loading...</>}
          <TextContainer>
            <TextHeader>LIFE EXPECTANCY</TextHeader>
            This graph displays life expectancy in years over time in various Bay Area counties. Note that the top 4
            counties for longest life expectancy are San Mateo, Santa Clara, Marin, and San Francisco (in that order).
            <br />
            <LineBreak />
            Many factors are involved in determining life expectancy (race, physique, diet, environment, etc). At a high
            level, location seems to be a useful indicator for life expectancy as the other factors mentioned tend to
            correlate with geography. Dig into the data below.
          </TextContainer>
        </ContentContainer>
      </SolanoCountyBackground>
      <SanMateoBackground>
        <Table data={items ?? []} tableTitle={`Life Expectancy by County`} tableDataPointTitle={`Life Expectancy`} />
      </SanMateoBackground>
    </>
  )
}

export default CountyRent
