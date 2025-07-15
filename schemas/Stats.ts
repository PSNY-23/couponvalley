import { z } from "zod";

// Stats model
export const StatsSchema = z.object({
  id: z.string(),
  totalOffers: z.number().int(),
  couponCodes: z.number().int(),
  inStoreCoupons: z.number().int(),
  freeShippingDeals: z.number().int(),
  storeId: z.string(),
  createdAt: z.date(),
  updatedAT: z.date(),
});

export const StatsInputSchema = StatsSchema.omit({
  id: true,
  createdAt: true,
  updatedAT: true,
});
export const StatsUpdateSchema = StatsInputSchema.partial();

//types
export type StatsType = z.infer<typeof StatsSchema>;
export type StatsInputType = z.infer<typeof StatsInputSchema>; 
export type StatsUpdateType = z.infer<typeof StatsUpdateSchema>;