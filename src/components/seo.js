import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        url
        image
      }
    }
  }
`

const SEO = () => {
  const { site } = useStaticQuery(query)

  const {
    title,
    titleTemplate,
    url,
    description,
    image
  } = site.siteMetadata

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="og:description" content={description} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {url && <meta property="og:url" content={url} />}

      {title && <meta property="og:title" content={title} />}     

      {image && <meta property="og:image" content={image} />}
    </Helmet>
  )
}

export default SEO


