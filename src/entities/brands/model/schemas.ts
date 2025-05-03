import { z } from 'zod';

export const brandSchema = z.object({
  name: z.string(),
  area_id: z.number().nullable(),
});

export const brandTableSchema = brandSchema.extend({
  id: z.number(),
});

export const brandResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  area_name: z.string().nullable(),
});

export type Brand = z.infer<typeof brandSchema>;
export type BrandTable = z.infer<typeof brandTableSchema>;
export type BrandResponse = z.infer<typeof brandResponseSchema>;
