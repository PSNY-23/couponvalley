import { z } from "zod";
// FAQ model
export const FAQSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  storeId: z.string(),
  createdAt: z.date(),
  updatedAT: z.date(),
});

export const FAQInputSchema = FAQSchema.omit({
  id: true,
  createdAt: true,
  updatedAT: true,
});
export const FAQUpdateSchema = FAQSchema.partial().omit({
  id: true,
  storeId: true,
  createdAt: true,
  updatedAT: true,
});

//type
export type FAQType = z.infer<typeof FAQSchema>;
export type FAQInputType = z.infer<typeof FAQInputSchema>;
export type FAQUpdateType = z.infer<typeof FAQUpdateSchema>;
