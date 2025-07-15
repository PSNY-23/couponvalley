import {z} from "zod"
// ContentWriter model
export const ContentWriterSchema = z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    storeId: z.string(),
    createdAt: z.date(),
    updatedAT: z.date(),
  });
export const ContentWriterInputSchema = ContentWriterSchema.omit({
  id: true,
  createdAt: true,
  updatedAT: true,
})

export const ContentWriterUpdateSchema = ContentWriterInputSchema.partial()

//types
export type ContentWriterType = z.infer<typeof ContentWriterSchema>
export type ContentWriterInputType = z.infer<typeof ContentWriterInputSchema>
export type ContentWriterUpdateType = z.infer<typeof ContentWriterUpdateSchema>
