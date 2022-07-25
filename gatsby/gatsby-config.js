
const siteUrl = `https://objective-colden-a83041.netlify.app/`


module.exports = {
  siteMetadata: {
    siteUrl,
    title: `therethere`,
    description: `WEBSITE COMING SOON`,
    social: {
      twitter: `therethere`,
    },
    author: `therethere`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-transition-link", "gatsby-plugin-gatsby-cloud", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/favicon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: `6urrv41e`,
      dataset: `production`,
      // a token with read permissions is required
      // if you have a private dataset
      token: process.env.SANITY_TOKEN,
      watchMode: true
    },
  },
]
};