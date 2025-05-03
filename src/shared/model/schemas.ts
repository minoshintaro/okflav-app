import { z } from 'zod';

export const idSchema = z.object({
  id: z.number({
    required_error: 'id is required',
    invalid_type_error: 'id must be a number',
  }),
});

export const idParamSchema = z.coerce.number().int().positive();

export const lastInsertRowidSchema = z.bigint()
  .refine((val) => Number.isSafeInteger(Number(val)), {
    message: 'lastInsertRowid is not a safe integer',
  })
  .transform((val) => Number(val));


export const comboboxOptionSchema = z.object({
  id: z.number().nullable(),
  name: z.string(),
});

export type ComboboxOption = z.infer<typeof comboboxOptionSchema>;
