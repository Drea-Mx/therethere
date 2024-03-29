// deskStructure.js
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default (S, context) =>
  S.list()
    .title('Pages')
    .items([
        orderableDocumentListDeskItem(
          {
            type: 'architecture', S, context,
            title: 'Architectures',
          }
        ),
        orderableDocumentListDeskItem(
          {
            type: 'counterNarrative', S, context,
            title: 'Counter Narratives',
          },
        ),
        orderableDocumentListDeskItem(
          {
            type: 'fiction', S, context,
            title: 'Fictions',
          },
        ),
        S.listItem()
          .title('Settings')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
        .title('Architectures Page')
        .icon(() => '🏡')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
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
        ...S.documentTypeListItems().filter(listItem => !['settingsPage','homePage', 'counterNarrativesPage', 'fictionsPage', 'aboutPage' ].includes(listItem.getId()))
    ])