// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


import imageType from './objects/imageType'
import blockModule from './objects/blockModule'
import seo from './objects/seo'
import infoModule from './objects/infoModule'
import oneColumn from './objects/editorial/oneColumn'
import twoColumn from './objects/editorial/twoColumn'
import threeColumn from './objects/editorial/threeColumn'
import editorial from './objects/editorial/editorial'
import meta from './objects/meta'
import columns from './objects/columns'
import initialcolumn from './objects/initialcolumn'
import award from './objects/award'
import newAbout from './objects/newAbout'
import newObject from './objects/new'

import homePage from './documents/homePage'
import settingsPage from './documents/settingsPage'
import architecture from './documents/architecture'
import counterNarrative from './documents/counterNarrative'
import fiction from './documents/fiction'
// import architecturesPage from './documents/architecturesPage'
import counterNarrativesPage from './documents/counterNarrativesPage'
import fictionsPage from './documents/fictionsPage'
import aboutPage from './documents/aboutPage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    imageType,
    blockModule,
    seo,
    infoModule,
    oneColumn,
    twoColumn,
    threeColumn,
    editorial,
    meta,
    columns,
    initialcolumn,
    award,
    newAbout,
    newObject,

    homePage,
    settingsPage,
    architecture,
    counterNarrative,
    fiction,
    // architecturesPage,
    counterNarrativesPage,
    fictionsPage,
    aboutPage

  ]),
})
