import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { requestData } from '../../../shared/api';
import type { PostResponse } from '../../../entities/posts';
import type { PostFormParam } from '../model/schemas';
import { useAppForm } from '../model/useAppForm'

export function usePostForm(defaultValues: PostFormParam) {
  const { mutateAsync } = useMutation<PostResponse, Error, PostFormParam>({
    mutationFn: async (data: PostFormParam) => requestData({
      url: '/api/posts',
      method: 'PUT',
      data,
    }),
  });

  const navigate = useNavigate();

  const form = useAppForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      if (!value.brand || !value.product) {
        throw new Error('ブランドと商品は必須です');
      }
      const result = await mutateAsync(value);

      navigate({
        to: '/posts/$id',
        params: { id: String(result.id) },
      });
    },
  });

  return form;
}
