module.exports = {
  siteMetadata: {
    title: 'Dentist New Hyde Park: Dr. Diana Gerov - Near You',
    description: 'Dentist New Hyde Park: Dr. Diana Gerov - Near You',
    keywords: `blog web development`,
    url: `https://dr-dianagerov-dev.netlify.app`,
    author: 'Strapi team'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.DEPLOY_URL
          ? 'https://happy-denta-smile.herokuapp.com'
          : 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'advantages',
          'articles',
          'blog-archives',
          'categorys',
          'comments',
          'f-a-qs',
          'promotions',
          'services',
          'teams',
          'users'
        ],
        singleTypes: [
          'about-us',
          'accepted-insurances',
          'blog',
          'contact-us',
          'contacts',
          'homepage-elements',
          'navigation-menu',
          'patient-survey',
          'promotions-page',
          'site-logo',
          'testimonials',
          'working-hours'
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}