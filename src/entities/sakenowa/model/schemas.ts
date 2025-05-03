import { z } from 'zod';

export const sakenowaAreaSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const sakenowaBrandSchema = z.object({
  id: z.number(),
  name: z.string(),
  breweryId: z.number(),
});

export const sakenowaBrewerySchema = z.object({
  id: z.number(),
  name: z.string(),
  areaId: z.number(),
});

export const sakenowaFlavorChartSchema = z.object({
  brandId: z.number(),
  f1: z.number(), // 華やか
  f2: z.number(), // 芳醇
  f3: z.number(), // 重厚
  f4: z.number(), // 穏やか
  f5: z.number(), // ドライ
  f6: z.number(), // 軽快
});

export const sakenowaFlavorTagSchema = z.object({
  id: z.number(),
  tag: z.string(),
});

export const sakenowaBrandFlavorTagSchema = z.object({
  brandId: z.number(),
  tagIds: z.array(z.number()),
});

// Stored data

export const storedSakenowaAreaSchema = z.object({
  copyright: z.string(),
  areas: z.array(sakenowaAreaSchema),
});

export const storedSakenowaBrandSchema = z.object({
  copyright: z.string(),
  brands: z.array(sakenowaBrandSchema),
});

export const storedSakenowaBrewerySchema = z.object({
  copyright: z.string(),
  breweries: z.array(sakenowaBrewerySchema),
});

export const storedSakenowaFlavorChartSchema = z.object({
  copyright: z.string(),
  flavorCharts: z.array(sakenowaFlavorChartSchema),
});

export const storedSakenowaFlavorTagSchema = z.object({
  copyright: z.string(),
  tags: z.array(sakenowaFlavorTagSchema),
});

export const storedSakenowaBrandFlavorTagSchema = z.object({
  copyright: z.string(),
  flavorTags: z.array(sakenowaBrandFlavorTagSchema),
});

export type SakenowaArea = z.infer<typeof sakenowaAreaSchema>;
export type SakenowaBrand = z.infer<typeof sakenowaBrandSchema>;
export type SakenowaBrewery = z.infer<typeof sakenowaBrewerySchema>;
export type SakenowaFlavorChart = z.infer<typeof sakenowaFlavorChartSchema>;
export type SakenowaFlavorTag = z.infer<typeof sakenowaFlavorTagSchema>;
export type SakenowaBrandFlavorTag = z.infer<typeof sakenowaFlavorTagSchema>;

export type StoredSakenowaArea = z.infer<typeof storedSakenowaAreaSchema>;
export type StoredSakenowaBrand = z.infer<typeof storedSakenowaBrandSchema>;
export type StoredSakenowaBrewery = z.infer<typeof storedSakenowaBrewerySchema>;
export type StoredSakenowaFlavorChart = z.infer<typeof storedSakenowaFlavorChartSchema>;
export type StoredSakenowaFlavorTag = z.infer<typeof storedSakenowaFlavorTagSchema>;
export type StoredSakenowaBrandFlavorTag = z.infer<typeof storedSakenowaBrandFlavorTagSchema>;
