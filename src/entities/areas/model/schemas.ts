import { z } from 'zod';

export const areaSchema = z.object({
  name: z.string(),
});

export const areaTableSchema = areaSchema.extend({
  id: z.number(),
});

export type Area = z.infer<typeof areaSchema>;
export type AreaTable = z.infer<typeof areaTableSchema>;
export type AreaResponse = AreaTable;
