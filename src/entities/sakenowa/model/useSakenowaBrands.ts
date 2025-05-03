import { useQuery } from '@tanstack/react-query';
import { filterOptions } from '../../../shared/utils';
import { getSakenowaBrandQueryOptions } from '../api/queryOptions';
import type { SakenowaBrand } from './schemas';

export function useSakenowaBrands() {
  const { data } = useQuery(getSakenowaBrandQueryOptions());

  function filterSakenowaBrands(query: string): SakenowaBrand[] {
    return data ? filterOptions<SakenowaBrand>(data.brands, query) : [];
  }

  return { data, filterSakenowaBrands }
}
