import { z } from "zod";
import { CategorySchema } from "./Category.js";
import { ContentWriterSchema } from "./ContentWriter.js";
import { FAQSchema } from "./Faq.js";
import { StatsSchema } from "./Stats.js";
import {CouponSchema } from "./Coupon.js";
import { FeaturedArticleSchema } from "./FeaturedArticle.js";

// Full schema
export const StoreSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  description: z.string(),
  rating: z.number(),
  reviewCount: z.number().int(),
  phone: z.string(),
  address: z.string(),
  topOffers: z.array(z.string()),
  featuredArticles: z.array(FeaturedArticleSchema),
  coupons: z.array(CouponSchema),
  faqs: z.array(FAQSchema),
  categories: z.array(CategorySchema),
  stats: StatsSchema.optional(),
  contentWriter: ContentWriterSchema.optional(),
  createdAt: z.date(),
  updatedAt: z.date(), // ✅ fixed casing
});

// For create/update (omit read-only/auto fields)
export const baseStoreSchema = StoreSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  featuredArticles: true,
  coupons: true,
  faqs: true,
  categories: true,
  stats: true,
  contentWriter: true,
  topOffers: true, // ✅ include this only if settable by client
});

// Types
export type Store = z.infer<typeof StoreSchema>;
export type StoreInput = z.infer<typeof baseStoreSchema>;
