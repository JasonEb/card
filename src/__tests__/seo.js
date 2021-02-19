import React from 'react'
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import SEO from '../components/seo'

describe('SEO component', () =>  {
    beforeAll(() => {
        useStaticQuery.mockReturnValue({
            site: {
                siteMetadata: {
                    title: "Gatsby Business Card",
                    titleTemplate: "%s",
                    description: "Software Developer",
                    url: "http://jasoneb.github.io/card", // No trailing slash allowed!
                    image: "/images/je.jpg", // Path to your image you placed in the 'static' folder
                }
            }
        })
    })

    test('should render correct meta data for home page', () => {
        const mockTitle = "Gatsby Business Card"
        const mockDescription =  "A business card built with React.js and the Gatsby framework"
        const mockUrl = "http://jasoneb.github.io/card"

        render(<SEO ></SEO>)
        const { title, description, url } = Helmet.peek()
        debugger
        
        expect(title).toBe(mockTitle)
        expect(description).toBe(mockDescription)
        expect(url).toBe(mockUrl)
    })
})