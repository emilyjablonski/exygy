import styled from '@emotion/styled'
import solano from './assets/solano.jpg'
import sanMateo from './assets/sanMateo.png'
import santaClara from './assets/santaClara.jpg'
import generalBay from './assets/generalBay.jpg'

// Used for a single block of graph + text, responsive
export const ContentContainer = styled.div({
  'display': `flex`,
  'flexDirection': `row`,
  '@media (max-width: 1050px)': {
    flexDirection: `column`,
  },
})

// The boxshadow used by mui-datatables, so our containers can look cohesive
const boxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`

// Used to contain a graph
export const DataContainer = styled.div({
  opacity: 0.85,
  boxShadow: boxShadow,
  backgroundColor: `white`,
  borderRadius: `4px`,
})

// Used to contain a table
export const TableContainer = styled.div({
  opacity: 0.85,
  boxShadow: boxShadow,
  backgroundColor: `white`,
  borderRadius: `4px`,
  margin: `60px`,
})

// Used to contain a text box
export const TextContainer = styled.div({
  'opacity': 0.85,
  'boxShadow': boxShadow,
  'backgroundColor': `white`,
  'borderRadius': `4px`,
  'height': `575px`,
  'width': `300px`,
  'padding': `15px`,
  'marginLeft': `30px`,
  'fontSize': `22px`,
  '@media (max-width: 1050px)': {
    height: `180px`,
    width: `700px`,
    marginLeft: `0px`,
    marginTop: `30px`,
    fontSize: `14px`,
  },
  '@media (max-width: 840px)': {
    height: `190px`,
    width: `500px`,
    marginLeft: `0px`,
    marginTop: `30px`,
    fontSize: `14px`,
  },
  '@media (max-width: 580px)': {
    height: `190px`,
    width: `350px`,
    marginLeft: `0px`,
    marginTop: `30px`,
    fontSize: `12px`,
  },
  'display': `flex`,
  'flexDirection': `column`,
})

// Header text within a text box
export const TextHeader = styled.span({
  'fontFamily': `Raleway`,
  'color': `#7F7FBA`,
  'fontSize': `33px`,
  'borderBottom': `4px solid #7F7FBA`,
  'marginBottom': `15px`,
  '@media (max-width: 1050px)': {
    fontSize: `21px`,
  },
})

export const LineBreak = styled.hr({
  width: `100%`,
  marginTop: `15px`,
  marginBottom: `10px`,
})

// Peach
export const SolanoCountyBackground = styled.div({
  backgroundImage: `url(${solano})`,
  width: `100%`,
  height: `650px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderTop: `10px solid #EE6C4D`,
})

// Peach
export const GeneralBayBackground = styled.div({
  backgroundImage: `url(${generalBay})`,
  width: `100%`,
  height: `650px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderTop: `10px solid #EE6C4D`,
})

// Lilac
export const SanMateoBackground = styled.div({
  backgroundImage: `url(${sanMateo})`,
  width: `100%`,
  height: `650px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderTop: `10px solid #7F7FBA`,
})

// Lilac
export const SantaClaraBackground = styled.div({
  backgroundImage: `url(${santaClara})`,
  width: `100%`,
  height: `650px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderTop: `10px solid #7F7FBA`,
})
