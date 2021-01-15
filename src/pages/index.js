import React from "react"
import styled from "styled-components"
import Layout from '../components/layout'

const Container = styled.div`
  outline: 2px solid black;
  outline-style: dashed;
  padding: 1em;
  margin: 1em;
  color: rgba(0,0,0,0.6);
  background-color: #1f545d;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
`

export default function Home() {
  const fonts = ['Didot', 'Verdana', 'Helvetica', 'Tahoma', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT']

  const cards = fonts.map( (font) => {
      return <Container font={font} style={{fontFamily: font}}>
        <h1>{font}</h1>
        <h2>Lorem ipsum bisso llhasa aphso</h2>
        <div>Developer</div>
      </Container>
    }
  )

  return <Layout>
    {cards}
  </Layout> 
}
