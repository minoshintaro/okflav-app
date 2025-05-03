import type { ComboboxOption } from '../../../shared/model';
import type { ProductResponse } from '../../../entities/products';
import type { SakenowaBrand } from '../../../entities/sakenowa';

export function getBrandName(value: ProductResponse | SakenowaBrand | ComboboxOption): string {
  if ('brand_name' in value) return value.brand_name;
  return value.name;
}

export function getBrandProductName(value: ProductResponse | SakenowaBrand | ComboboxOption): string {
  if ('brand_name' in value) return `${value.brand_name} ${value.name}`;
  return value.name;
}
