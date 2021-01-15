import React from "react"
import styled from "styled-components"
import Layout from '../components/layout'

const Container = styled.div`
  outline: 2px solid black;
  font-family: Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif;
  padding: 1em;
`

export default function Home() {
  return <Layout>
    <Container>
      <div>Jason Ebueng</div>
      <div>Rails / JavaScript Developer</div>
    </Container>
  </Layout> 
}
