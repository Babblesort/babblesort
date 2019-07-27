module.exports = {
  siteMetadata: {
    title: `Babblesort`,
    description: `Personal developer blog of Paul McConnell`,
    author: `Paul McConnell`,
    defaultPage: `/log/1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logEntries`,
        path: `${__dirname}/src/pages/log`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/components/log-entry-layout.js'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Babblesort Developer Log`,
        short_name: `babblesort`,
        start_url: `/`,
        background_color: `#ffd300`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/circle-b.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
