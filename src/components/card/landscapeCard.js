import React from "react"
import styled from "styled-components"
// import LargeTriangles from '../../svgs/Large-Triangles.svg'

const Container = styled.div`
  outline: 2px solid black;
  outline-style: dashed;
  padding: 1em 2em 1em 2em;
  margin: 2em;
  width: ${3.5 * 5.30 }em;
  height: ${2 *  5.30 }em;

  background-color: #00fffb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%237afeea' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23a8fcd8' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23cafac7' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23e6f8b5' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23fff6a3' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23eff1b6' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ddecc9' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23c9e7db' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23b1e2ed' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%2394ddff' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-position: 0% 50%;
`

const Box = styled.div`
  outline: 1px solid red dashed; 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  flex: 1 2 auto;
`

// left column
const LeftColumn = styled.div`
  // outline: 1px solid blue; 
  display: flex;
  flex-direction: column;
  margin-right: -1em;
`

const InnerLeftBox = styled.div`
  // outline: 1px solid yellow; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-right: 2px solid rgba(0,0,0,0.6);
  padding-right: 0.5em;
  width: 75%;
`

const NameDiv = styled.div`
  background-color: darkcyan;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
  width: max-content;
  font-size: 1.25em;
  font-weight: bold;
`

const SubheaderDiv = styled.div`
  font-size: 0.8em;
  width: max-content;
  font-family: ${props => props.font}
`

//right column
const RightColumn = styled.div`
  // outline: 1px solid blue; 
  display: flex;
  flex-direction: column;
`
const InnerRightBox = styled.div`
  // outline: 1px solid green; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  display: 100%
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
  font-size: 0.82em;
`

const StyledIcon = styled.div`
  font-size:1.5em;
  color: rgba(0,0,0,0.6);
  display: inline;
`

const StyledLinkedInIcon = styled.div`
  font-size:1.25em;
  border: 1px solid black;
  display: inline-block;
  border-radius: 5px;
  height: 1.20em;
  width: 1.5em;
  text-align: center;
  color: rgba(255,255,255,0.8);
  background-color: rgba(0,0,0,0.6);
  display: inline;
  margin-right: 2px;
`

export default function LandscapeCard(props) {
    let {font} = props

  return <Container className="landscape-card" font={font} style={{fontFamily: font}}>
    <Box>
      <LeftColumn>
        <InnerLeftBox>
          <NameDiv>jason ebueng</NameDiv> 
          <SubheaderDiv font={font}>Web Developer</SubheaderDiv>
        </InnerLeftBox>
      </LeftColumn>
      <RightColumn>
        <InnerRightBox>
          <StyledList>
            <StyledItem>
              <StyledIcon><span role="img" aria-label="home">🏠</span></StyledIcon>Southern California
            </StyledItem>
            <StyledItem>
              <StyledIcon><span role="img" aria-label="email">📧</span></StyledIcon>jason.ebueng[at]gmail.com
            </StyledItem>
              <StyledItem>
                <StyledIcon><span role="img" aria-label="github">🐈</span></StyledIcon>github.com/JasonEb
            </StyledItem>
              <StyledItem>
                <StyledIcon><span role="img" aria-label="linkedin">📄</span></StyledIcon>linkedin.com/in/jasonebueng/ 
            </StyledItem>
          </StyledList>
        </InnerRightBox>
      </RightColumn>
    </Box>
</Container>
}