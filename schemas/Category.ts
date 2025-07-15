import { z } from "zod";
// Category model
export const CategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  storeId: z.string(),
  createdAt: z.date(),
  updatedAT: z.date(),
});

export const CategoryInputSchema = CategorySchema.omit({
  id: true,
  createdAt: true,
  updatedAT: true,
})

export const CategoryUpdateSchema = CategoryInputSchema.partial();

export type CategoryInputSchemaType = z.infer<typeof CategoryInputSchema>;

export type Category = z.infer<typeof CategorySchema>;

export type CategoryUpdateSchemaType = z.infer<typeof CategoryUpdateSchema>;
