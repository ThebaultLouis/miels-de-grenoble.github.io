import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { HoneyProductSchema } from './content/products/schema'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'data',
      source: 'products/**.yml',
      schema: HoneyProductSchema
    })
  }
})

