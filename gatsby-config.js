module.exports = {
  pathPrefix: "/clementsjj",
  siteMetadata: {
    title: `JJ Clements' Home`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    }
  ]
};
