import { useQuery } from '@tanstack/react-query';
import { getSakenowaBreweryQueryOptions } from '../api/queryOptions';
import type { SakenowaBrewery, SakenowaBrand } from './schemas';

export function useSakenowaBreweries() {
  const { data } = useQuery(getSakenowaBreweryQueryOptions());

  function findBreweryData(value: SakenowaBrand): SakenowaBrewery | null {
    const result = data?.breweries.find((brewery) => brewery.id === value.breweryId);
    return result ?? null;
  }

  return { data, findBreweryData }
}
