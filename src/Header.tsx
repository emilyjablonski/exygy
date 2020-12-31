import React from 'react'
import styled from '@emotion/styled'
import sanFran from './assets/sanFran.jpg'

const Header = () => {
  const BannerImage = styled.img({
    height: `auto`,
    width: `100%`,
  })

  const Banner = styled.div({
    width: `100%`,
    height: `100px`,
    display: `flex`,
    alignItems: `center`,
  })

  const BannerText = styled.div({
    color: `#F0F7EE`,
    fontFamily: `Raleway`,
    fontSize: `5vw`,
    marginLeft: `30px`,
  })

  return (
    <>
      <BannerImage src={sanFran} />
      <Banner>
        <BannerText>WHERE YOU LIVE MATTERS</BannerText>
      </Banner>
    </>
  )
}

export default Header
