import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'Salong Elizabeth',

  projectId: 'pot3xlx8',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
