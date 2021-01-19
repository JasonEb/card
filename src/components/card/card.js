import React from "react"
import styled from "styled-components"

const Container = styled.div`
  outline: 2px solid black;
  outline-style: dashed;
  padding: 1em 2em 1em 2em;
  margin: 2em;
  width: ${3.5 * 5.30 }em;
  height: ${2 *  5.30 }em;
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
  // outline: 1px solid blue; 
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
// left column
const InnerLeftBox = styled.div`
  // outline: 1px solid yellow; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-right: 2px solid rgba(0,0,0,0.6);
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
  // outline: 1px solid green; 
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

const StyledIcon = styled.div`
  font-size:1em;
  color: rgba(0,0,0,0.6);
`

const StyledLinkedInIcon = styled.div`
  font-size:1em;
  border: 1px solid black;
  display: inline-block;
  border-radius: 5px;
  height: 1.20em;
  width: 1.25em;
  text-align: center;
  color: white;
  background-color: rgba(0,0,0,0.6);;
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
            <StyledItem><StyledIcon>🏠</StyledIcon>Southern California</StyledItem>
            <StyledItem><StyledIcon>📧</StyledIcon>jason.ebueng[at]gmail.com</StyledItem>
            <StyledItem><StyledIcon>🐈</StyledIcon>https://github.com/JasonEb</StyledItem>
            <StyledItem><StyledLinkedInIcon>in</StyledLinkedInIcon>https://www.linkedin.com/in/jasonebueng/ </StyledItem>
          </StyledList>
        </InnerRightBox>
      </Column>
    </Box>
</Container>
}