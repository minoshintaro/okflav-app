import { z } from 'zod';

export const postSchema = z.object({
  comment: z.string(),
  product_id: z.number(),
  user_id: z.number(),
});

export const postTableSchema = postSchema.extend({
  id: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const postResponseSchema = postTableSchema.extend({
  area_id: z.number(),
  area_name: z.string(),
  brand_id: z.number(),
  brand_name: z.string(),
  product_name: z.string(),
  user_name: z.string(),
});

export const postReferencesExistSchema = z.object({
  brand_exists: z.number().nullable().optional(),
  product_exists: z.number().nullable().optional(),
});

export type Post = z.infer<typeof postSchema>;
export type PostResponse = z.infer<typeof postResponseSchema>;
