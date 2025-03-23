import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'data',
      source: 'products/**.yml',
      schema: z.object({
        productId: z.string(),
        name: z.string(),
        price: z.number(),
        image: z.string(),
        description: z.string(),
      })
    })
  }
})

