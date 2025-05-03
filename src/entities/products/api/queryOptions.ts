import { queryOptions } from "@tanstack/react-query";
import { requestData } from '../../../shared/api';
import { productResponseSchema, type ProductResponse } from '../model/schemas';

export function getLatestProductQueryOptions() {
  return queryOptions({
    queryKey: ['api', 'products', 'latest'],
    queryFn: async () => requestData<undefined, ProductResponse[]>({
      url: '/api/products/latest',
      method: 'GET',
      schema: productResponseSchema.array(),
    }),
  });
}

export function getBrandProductQueryOptions(name: string) {
  return queryOptions({
    queryKey: ['api', 'products', 'brands', name],
    queryFn: async () => requestData<undefined, ProductResponse[]>({
      url: `/api/products?brand_name=${name}`,
      method: 'GET',
      schema: productResponseSchema.array(),
    }),
    enabled: name !== '',
    retry: false,
  });
}
