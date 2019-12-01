require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Firebase Simple Authentication`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false
        }
      }
    }
  ]
}