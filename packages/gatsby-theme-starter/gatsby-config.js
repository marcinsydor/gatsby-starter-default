module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: `Gatsby Theme Starter`,
      description: ``,
      author: ``,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages/`,
        },
      },
    ],
  }
}
