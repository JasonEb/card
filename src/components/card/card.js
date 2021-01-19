import React from "react"
import styled from "styled-components"

const Container = styled.div`
  outline: 2px solid black;
  outline-style: dashed;
  padding: 1em 2em 1em 2em;
  margin: 2em;
  width: ${3.5 * 72 }px;
  height: ${2 * 72 }px;
`

const Box = styled.div`
  outline: 1px solid red dashed; 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

const Column = styled.div`
  outline: 1px solid blue; 
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
// left column
const InnerLeftBox = styled.div`
  outline: 1px solid yellow; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const NameDiv = styled.div`
  color: rgba(0,0,0,0.6);
  background-color: #1f545d;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
`

const SubheaderDiv = styled.div`
  font-size: 0.7em;
  font-family: ${props => props.font}
`

//right column

const InnerRightBox = styled.div`
  outline: 1px solid green; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.15em;
  align-self: center;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledItem = styled.li`
  font-size: 0.50em;
`

export default function Card(props) {
    let {font} = props

  return <Container font={font} style={{fontFamily: font}}>
    <Box>
      <Column>
        <InnerLeftBox>
          <NameDiv>Jason Ebueng </NameDiv> 
          <SubheaderDiv font={font}>Web Developer</SubheaderDiv>
        </InnerLeftBox>
      </Column>
      <Column>
        <InnerRightBox>
          <StyledList>
            <StyledItem>🏠: Southern California</StyledItem>
            <StyledItem>📧: jason.ebueng[at]gmail.com</StyledItem>
            <StyledItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z" fill="#24292E"/>
</svg>: https://github.com/JasonEb
            </StyledItem>
            <StyledItem>Resume</StyledItem>
          </StyledList>
        </InnerRightBox>
      </Column>
    </Box>
</Container>
}