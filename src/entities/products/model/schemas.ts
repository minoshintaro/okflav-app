import { z } from 'zod';

export const productSchema = z.object({
  name: z.string(),
  brand_id: z.number(),
});

export const productTableSchema = productSchema.extend({
  id: z.number(),
});

export const productResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  brand_id: z.number(),
  brand_name: z.string(),
  area_id: z.number(),
  area_name: z.string(),
});

export type Product = z.infer<typeof productSchema>;
export type ProductTable = z.infer<typeof productTableSchema>;
export type ProductResponse = z.infer<typeof productResponseSchema>;
