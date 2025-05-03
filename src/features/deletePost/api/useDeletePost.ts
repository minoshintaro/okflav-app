import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { requestData } from '../../../shared/api';

export function useDeletePost(options?: UseMutationOptions<void, Error, number>) {
  return useMutation<void, Error, number>({
    mutationFn: async (id) => {
      await requestData({
        url: `/api/posts/${id}`,
        method: 'DELETE',
      });
    },
    ...options,
  });
}
