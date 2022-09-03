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
          architectures: allSanityArchitecture(sort: {fields: orderRank, order: ASC}) {
            edges {
              node {
                slug {
                  current
                }
                title
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  const posts = data.architectures.edges
  posts.forEach(({node}, index) => {
    const path = node.slug.current

      actions.createPage({
          // url forths new page
          path,
          component: architectureTemplate,
          context: {
              language: 'en',
              slug: path,
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node
          }
      })
  });
}







async function turnCounterIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const counterTemplate = path.resolve('./src/templates/Counter.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          counters: (sort: {fields: orderRank, order: ASC}) {
            edges {
              node {
                slug {
                  current
                }
                title
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  const postsCount = data.counters.edges
  postsCount.forEach(({node}, index) => {
      const pathÇount = `/counternarratives/${node.slug.current}`

      actions.createPage({

          // url forths new page
          pathÇount,
          component: counterTemplate,
          context: {
            language: 'en',
            slug: pathÇount,
            pathSlug: pathÇount,
            prev: index === 0 ? null : postsCount[index - 1].node,
            next: index === (postsCount.length - 1) ? null : postsCount[index + 1].node
        }
      })
  });
}


async function turnFictionIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const fictionTemplate = path.resolve('./src/templates/Fiction.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          fictions: allSanityFiction {
            nodes {
              title
              slug {
                current
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.fictions.nodes.forEach((fiction) => {
      actions.createPage({
          // url forths new page
          path: `/fictions/${fiction.slug.current}`,
          component: fictionTemplate,
          context: {
              language: 'en',
              slug: fiction.slug.current,
          }
      })
  });
}


exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Architectures
        turnArchitecturesIntoPages(params),
        turnCounterIntoPages(params),
        turnFictionIntoPages(params),

    ])
}