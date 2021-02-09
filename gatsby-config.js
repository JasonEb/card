/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-react-helmet`],
  pathPrefix: "/card",
  siteMetadata: {
  title: "Gatsby Business Card",
    titleTemplate: "%s",
    description:
      "Software Developer",
    url: "http://jasoneb.github.io/card", // No trailing slash allowed!
    image: "/images/je.jpg", // Path to your image you placed in the 'static' folder
  },
}
