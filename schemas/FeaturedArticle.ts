import { z } from "zod";
// FeaturedArticle model
export const FeaturedArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  author: z.string(),
  storeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const FeaturedArticleInputSchema = FeaturedArticleSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const FeaturedArticleUpdateSchema = FeaturedArticleInputSchema.partial();


//types
export type FeaturedArticleType = z.infer<typeof FeaturedArticleSchema>;
export type FeaturedArticleInputType = z.infer<typeof FeaturedArticleInputSchema>;
export type FeaturedArticleUpdateType = z.infer<typeof FeaturedArticleUpdateSchema>;
