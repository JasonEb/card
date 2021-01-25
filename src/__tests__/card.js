import React from "react"
import { render, screen } from "@testing-library/react"
import renderer from "react-test-renderer"

import Card from "../components/card/card"

describe("Card", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Card />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  beforeEach( () => {
    return render(<Card />)  
  })

  it("it should have my Name", () => {
      const name = screen.getByText('jason ebueng')
      expect(name).toBeTruthy()
  })

  test("it should have my Linkedin", () => {
    const url = screen.getByText('linkedin.com/in/jasonebueng/')
    expect(url).toBeTruthy()
  })

  test("it should have my GitHub", () => {
    const github = screen.getByText('github.com/JasonEb')
    expect(github).toBeTruthy()
  })

  test("it should have my email", () => {
    const email = screen.getByText('jason.ebueng[at]gmail.com')
    expect(email).toBeTruthy()
  })

  test("it should have my blog", () => {
    const blog = screen.getByText('https://jasoneb.github.io/blog')
    expect(blog).toBeTruthy()
  })
})