import { queryOptions } from "@tanstack/react-query";
import { requestData } from '../../../shared/api';
import {
  storedSakenowaAreaSchema,
  storedSakenowaBrandSchema,
  storedSakenowaBrewerySchema,
  type StoredSakenowaArea,
  type StoredSakenowaBrand,
  type StoredSakenowaBrewery
} from '../model/schemas';

export function getSakenowaAreaQueryOptions() {
  return queryOptions({
    queryKey: ['api', 'sakenowa', 'areas'],
    queryFn: async () => requestData<undefined, StoredSakenowaArea>({
      url: '/api/sakenowa/areas',
      method: 'GET',
      schema: storedSakenowaAreaSchema,
    }),
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

export function getSakenowaBrandQueryOptions() {
  return queryOptions({
    queryKey: ['api', 'sakenowa', 'brands'],
    queryFn: async () => requestData<undefined, StoredSakenowaBrand>({
      url: '/api/sakenowa/brands',
      method: 'GET',
      schema: storedSakenowaBrandSchema,
    }),
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

export function getSakenowaBreweryQueryOptions() {
  return queryOptions({
    queryKey: ['api', 'sakenowa', 'breweries'],
    queryFn: async () => requestData<undefined, StoredSakenowaBrewery>({
      url: '/api/sakenowa/breweries',
      method: 'GET',
      schema: storedSakenowaBrewerySchema,
    }),
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
