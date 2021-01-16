import React from "react"
import styled from "styled-components"
import Layout from '../components/layout'
import Card from '../components/card/card'

export default function Home() {
  const fonts = ['Didot', 'Verdana', 'Helvetica', 'Tahoma', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT']

  const cards = fonts.map( (font) => {
      return <Card font={font} style={{fontFamily: font}} />
    }
  )

  return <Layout>
    {cards}
  </Layout> 
}
