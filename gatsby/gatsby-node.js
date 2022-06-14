/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

async function turnArchitecturesIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const architectureTemplate = path.resolve('./src/templates/Architecture.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          architectures: allSanityArchitecture {
            nodes {
              slug {
                current
              }
              title
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.architectures.nodes.forEach((architecture) => {
      actions.createPage({
          // url forths new page
          path: `/${architecture.slug.current}`,
          component: architectureTemplate,
          context: {
              language: 'en',
              slug: architecture.slug.current,
          }
      })
  });
}


exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Architectures
        turnArchitecturesIntoPages(params),

    ])
}