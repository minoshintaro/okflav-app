import { z } from 'zod';
import { comboboxOptionSchema } from '../../../shared/model';
import { postResponseSchema } from '../../../entities/posts';
import { productResponseSchema } from '../../../entities/products';
import { sakenowaBrandSchema } from '../../../entities/sakenowa';

export const brandComboboxOptionSchema = z.union([
  sakenowaBrandSchema,
  productResponseSchema,
  comboboxOptionSchema,
]);

export const productComboboxOptionSchema = z.union([
  productResponseSchema,
  comboboxOptionSchema,
]);

export const postFormParamSchema = z.object({
  brand: brandComboboxOptionSchema.nullable(),
  product: productComboboxOptionSchema.nullable(),
  comment: z.string().min(1, '必須項目'),
  user_name: z.string().min(1, '必須項目'),
  area_id: z.number(),
  prev: postResponseSchema.optional(),
});

export const postFormRequestSchema = z.object({
  brand: brandComboboxOptionSchema,
  product: productComboboxOptionSchema,
  comment: z.string().min(1, '必須項目'),
  user_name: z.string().min(1, '必須項目'),
  area_id: z.number(),
  prev: postResponseSchema.optional(),
});

export type BrandComboboxOption = z.infer<typeof brandComboboxOptionSchema>;
export type ProductComboboxOption = z.infer<typeof productComboboxOptionSchema>;
export type PostFormParam = z.infer<typeof postFormParamSchema>;
export type PostFormRequest = z.infer<typeof postFormRequestSchema>;
