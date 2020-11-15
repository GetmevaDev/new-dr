const path = require(`path`);
// const { paginate } = require('gatsby-awesome-pagination') ;

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.jsx?$/)
    ),

    // Recreate it with custom exclude filter
    {
      // Called without any arguments, `loaders.js()` will return an
      // object like:
      // {
      //   options: undefined,
      //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
      // }
      // Unless you're replacing Babel with a different transpiler, you probably
      // want this so that Gatsby will apply its required Babel
      // presets/plugins.  This will also merge in your configuration from
      // `babel.config.js`.
      ...loaders.js(),

      test: /\.jsx?$/,

      // Exclude all node_modules from transpilation, except for 'swiper' and 'dom7'
      exclude: modulePath =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/(swiper|dom7)/.test(modulePath),
    },
  ]

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async  ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allStrapiBlogArchives(
          sort: { fields: createdAt, order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              Title
              Data
              Content
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // ...
  // Create blog-list pages
  const posts = result.data.allStrapiBlogArchives.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })


  // Create your paginated pages




  const getService = makeRequest(graphql, `
    {
       allStrapiServices {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiServices.edges.forEach(({ node }) => {
      createPage({
        path: `/services/${node.slug}`,
        component: path.resolve(`src/templates/services.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  const getTeams = makeRequest(graphql, `
    {
      allStrapiTeams {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiTeams.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/team.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  const getArticle = makeRequest(graphql, `
    {
      allStrapiArticles {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      createPage({
        path: `/article/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  const getBlogPost = makeRequest(graphql, `
    {
      allStrapiBlogArchives {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiBlogArchives.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  const getBlogList = makeRequest(graphql, `
    {
         allStrapiBlogArchives{
          edges {
          node {
            id
          }
        }
        }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiBlogArchives.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/blog-list.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  // const blogListItem = graphql`
  // {
  // allStrapiBlogArchives {
  //   edges {
  //     node{
  //       id
  //     }
  //   }
  // }
  // }
  // `
  //
  // paginate({
  //   createPage, // The Gatsby `createPage` function
  //   component: path.resolve('./src/templates/blog-list.js'),
  //   items: blogListItem.data.allStrapiBlogArchives.edges, // An array of objects
  //   itemsPerPage:6, // How many items you want per page
  //   pathPrefix: '/blog', // Creates pages  like `/blog`, `/blog/2`, etc
  //
  // });

  // Query for articles nodes to use in creating pages.
  return Promise.all([
    getService,
    getTeams,
    getArticle,
    getBlogList,
    getBlogPost,
  ])
};