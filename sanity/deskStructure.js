// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Settings')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
        .title('Home')
        .icon(() => '🏡')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
        S.listItem()
        .title('Architectures Page')
        .icon(() => '🌇')
        .child(
          S.document()
            .schemaType('architecturesPage')
            .documentId('architecturesPage')
        ),
        S.listItem()
        .title('Counter Narratives Page')
        .icon(() => '🌏')
        .child(
          S.document()
            .schemaType('counterNarrativesPage')
            .documentId('counterNarrativesPage')
        ),
        S.listItem()
        .title('Fictions Page')
        .icon(() => '🎭')
        .child(
          S.document()
            .schemaType('fictionsPage')
            .documentId('fictionsPage')
        ),
        S.listItem()
        .title('About Page')
        .icon(() => '📝')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !['settingsPage','homePage', 'architecturesPage', 'counterNarrativesPage', 'fictionsPage', 'aboutPage' ].includes(listItem.getId()))
    ])