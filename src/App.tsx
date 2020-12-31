import React from 'react'
import styled from '@emotion/styled'
import CountyLifeExpectancy from './CountyLifeExpectancy'
import CountyRent from './CountyRent'
import Header from './Header'

const App = () => {
  const AppContainer = styled.div({
    display: `flex`,
    alignItems: `center`,
    flexDirection: `column`,
    backgroundColor: `#7F7FBA`,
    fontColor: `#87BBA2`,
  })

  return (
    <AppContainer>
      <Header />
      <CountyLifeExpectancy />
      <CountyRent />
    </AppContainer>
  )
}

export default App
