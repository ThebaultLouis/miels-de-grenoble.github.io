import { z } from 'zod'

export const HoneyProductSizeSchema = z.object({
  quantity: z.number(),
  price: z.number().nullable(),
  description: z.string()
})

export const HoneyProductSchema = z.object({
  name: z.string(),
  image: z.string(),
  description: z.string(),
  sizes: z.array(HoneyProductSizeSchema)
})

// Type inference for TypeScript
export type HoneyProduct = z.infer<typeof HoneyProductSchema>
export type HoneyProductSize = z.infer<typeof HoneyProductSizeSchema>