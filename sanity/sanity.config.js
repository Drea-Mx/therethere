// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'

export default defineConfig({
  title: "therethere",
  projectId: "6urrv41e",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure
  })],
  schema: {
    types: schemas,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != ['settingsPage', 'homePage', 'counterNarrativesPage', 'fictionsPage', 'aboutPage'])
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settingsPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'homePage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'counterNarrativesPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'fictionsPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'aboutPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});