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
  justify-cioj
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 1em;
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
            <StyledItem>Phone</StyledItem>
            <StyledItem>StyledItemnkedin</StyledItem>
            <StyledItem>Resume</StyledItem>
          </StyledList>
        </InnerRightBox>
      </Column>
    </Box>
</Container>
}