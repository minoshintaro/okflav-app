import { useQuery } from '@tanstack/react-query';
import { getBrandProductQueryOptions } from '../api/queryOptions';

export function useBrandProductQuery(brandName: string) {
  const { data, isSuccess, isFetched } = useQuery(getBrandProductQueryOptions(brandName));
  return {
    data: data ? data : [],
    isSuccess,
    isFetched,
  };
}
