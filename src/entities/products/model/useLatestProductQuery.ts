import { useQuery } from '@tanstack/react-query';
import { getLatestProductQueryOptions } from '../api/queryOptions';

export function useLatestProductQuery() {
  const { data, isSuccess } = useQuery(getLatestProductQueryOptions());
  return {
    data: data ? data : [],
    isSuccess,
  };
}
