import {z} from "zod"

export const CouponSchema = z.object({
    id: z.string(),
    code: z.string().optional(),
    title: z.string().optional(),
    brandName: z.string().optional(),
    brandLogo: z.any().optional(), // Json field
    slug: z.string().optional(),
    date: z.string(),
    description: z.string(),
    savings: z.string().optional(),
    minimumPurchase: z.number().int().optional(),
    verified: z.boolean().optional(),
    exclusive: z.boolean().optional(),
    terms: z.string().optional(),
    expires: z.string().optional(),
    usedCount: z.number().int().optional(),
    storeId: z.string(),
    createdAt: z.date(),
    updatedAT: z.date(),
  });

export const CouponInputSchema = CouponSchema.omit({
  id: true,
  createdAt: true,
  updatedAT: true,
});
export const CouponUpdateSchema = CouponInputSchema.partial();

//types

export type CouponType = z.infer<typeof CouponSchema>;
export type CouponInputType = z.infer<typeof CouponInputSchema>;
export type CouponUpdateType = z.infer<typeof CouponUpdateSchema>;