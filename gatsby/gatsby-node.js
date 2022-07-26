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



async function turnCounterIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const counterTemplate = path.resolve('./src/templates/Counter.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          counters: allSanityCounterNarrative {
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
  data.counters.nodes.forEach((counter) => {
      actions.createPage({
          // url forths new page
          path: `/counternarratives/${counter.slug.current}`,
          component: counterTemplate,
          context: {
              language: 'en',
              slug: counter.slug.current,
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