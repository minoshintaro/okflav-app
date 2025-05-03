import { useQuery } from '@tanstack/react-query';
import { getSakenowaAreaQueryOptions } from '../api/queryOptions';
import { useSakenowaBreweries } from './useSakenowaBreweries';
import type { SakenowaArea, SakenowaBrand } from './schemas';

export function useSakenowaAreas() {
  const { data } = useQuery(getSakenowaAreaQueryOptions());
  const { findBreweryData } = useSakenowaBreweries();

  function findAreaData(value: SakenowaBrand): SakenowaArea | null {
    const brewery = findBreweryData(value);
    const area = data?.areas.find((area) => area.id === brewery?.areaId);
    return area ?? null;
  }

  return { data, findAreaData }
}
