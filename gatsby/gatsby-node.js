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
         {
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
  const postsArch = data.architectures.edges
  postsArch.forEach(({node}, index) => {
    const pathArch = node.slug.current

      actions.createPage({
          // url forths new page
          path: pathArch,
          component: architectureTemplate,
          context: {
              language: 'en',
              slug: pathArch,
              pathSlug: pathArch,
              prev: index === 0 ? null : postsArch[index - 1].node,
              next: index === (postsArch.length - 1) ? null : postsArch[index + 1].node
          }
      })
  });
}







async function turnCounterIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const counterTemplate = path.resolve('./src/templates/Counter.js')
  // 2. Query all artists
  const {data} = await graphql(`
       {
          counters: allSanityCounterNarrative(sort: {fields: orderRank, order: ASC}) {
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
  const postsCounter = data.counters.edges
  postsCounter.forEach(({node}, index) => {
      const pathCounter = node.slug.current

      actions.createPage({
          path: `/counternarratives/${pathCounter}`,
          component: counterTemplate,
          context: {
            language: 'en',
            slug: pathCounter,
            pathSlug: pathCounter,
            prev: index === 0 ? null : postsCounter[index - 1].node,
            next: index === (postsCounter.length - 1) ? null : postsCounter[index + 1].node
        }
      })
  });
}


async function turnFictionIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const fictionTemplate = path.resolve('./src/templates/Fiction.js')
  // 2. Query all artists
  const {data} = await graphql(`
       {
          fictions: allSanityFiction(sort: {fields: orderRank, order: ASC}) {
            edges {
              node {
                title
                slug {
                  current
                }
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  const postsFictions = data.fictions.edges
  postsFictions.forEach(({node}, index) => {
    const pathFictions = node.slug.current
      actions.createPage({
          // url forths new page
          path: `/fictions/${pathFictions}`,
          component: fictionTemplate,
          context: {
            language: 'en',
            slug: pathFictions,
            pathSlug: pathFictions,
            prev: index === 0 ? null : postsFictions[index - 1].node,
            next: index === (postsFictions.length - 1) ? null : postsFictions[index + 1].node
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