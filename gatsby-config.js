module.exports = {
  siteMetadata: {
    title: "Happy Smile Dental",
    titleTemplate: "%s | Dentist New Hyde Park: Dr. Diana Gerov - Near You",
    description:
      "Welcome to Happy Smiles Dental, a dynamic New Hyde Park Dentist office and progressive practice where the highest standard of care is paired with our concern...",
    url: "https://dr-dianagerov-dev.netlify.app",
    image:
      "/static/5b94ac94748251ef31e4653d1182bdfb/513be/38fdb1270428cd7f3fc415c1559e1101.jpg",
    twitterUsername: "@occlumency",
    siteUrl: `https://drdianagerov.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
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
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ],
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
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://new-adminpanel.herokuapp.com",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "advantages",
          "articles",
          "blog-archives",
          "categorys",
          "comments",
          "f-a-qs",
          "promotions",
          "services",
          "teams",
          "users",
        ],
        singleTypes: [
          "about-us",
          "accepted-insurances",
          "blog",
          "contact-us",
          "contacts",
          "homepage-elements",
          "navigation-menu",
          "patient-survey",
          "promotions-page",
          "site-logo",
          "testimonials",
          "working-hours",
          `common-meta-data`,
          `technology-page-seo`,
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "Dr. Diana Gerov",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
