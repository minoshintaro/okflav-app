import { queryOptions } from "@tanstack/react-query";
import { requestData } from '../../../shared/api';
import { postResponseSchema, type PostResponse } from '../model/schemas';

export function getLatestPostQueryOptions() {
  return queryOptions({
    queryKey: ['api', 'posts', 'latest'],
    queryFn: async () => requestData<undefined, PostResponse[]>({
      url: '/api/posts/latest',
      method: 'GET',
      schema: postResponseSchema.array(),
    }),
  });
}

export function getProductPostQueryOptions(id: string) {
  return queryOptions({
    queryKey: ['api', 'posts', 'products', id],
    queryFn: async () => requestData<undefined, PostResponse[]>({
      url: `/api/posts/products/${id}`,
      method: 'GET',
      schema: postResponseSchema.array(),
    }),
    enabled: id !== '0',
  });
}

export function getUserPostQueryOptions(id: string) {
  return queryOptions({
    queryKey: ['api', 'posts', 'users', id],
    queryFn: async () => requestData<undefined, PostResponse[]>({
      url: `/api/posts/users/${id}`,
      method: 'GET',
      schema: postResponseSchema.array(),
    }),
    enabled: id !== '0',
  });
}

export function getPostQueryOptions(id: string) {
  return queryOptions({
    queryKey: ['api', 'posts', id],
    queryFn: async () => requestData<undefined, PostResponse[]>({
      url: `/api/posts/${id}`,
      method: 'GET',
      schema: postResponseSchema.array(),
    }),
    enabled: id !== '0',
    retry: false,
  });
}
