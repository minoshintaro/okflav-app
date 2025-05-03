import { useEffect } from 'react';
import { useStore } from '@tanstack/react-form';
import { type PostResponse } from '../../../entities/posts';
import { useLatestProductQuery } from '../../../entities/products';
import { useSakenowaAreas } from '../../../entities/sakenowa';
import { usePostForm } from '../api/usePostForm';
import { getProductFromPost } from '../model/getProductFromPost';
import { type PostFormParam } from '../model/schemas';

type PostFormProps = {
  data?: PostResponse;
}

export function PostForm({ data }: PostFormProps) {

  // Form settings ==================================================================

  const defaultValues: PostFormParam = {
    brand: data ? getProductFromPost(data)  : null,
    product: data ? getProductFromPost(data) : null,
    comment: data ? data.comment : '',
    user_name: data ? data.user_name : '',
    area_id: data ? data.area_id : 0,
    prev: data,
  }

  const postForm = usePostForm(defaultValues);
  const { AppForm, AppField, SubmitButton } = postForm;

  const formValues = useStore(postForm.store, (state) => state.values);
  const brandSelection = formValues.brand;

  // Data ==================================================================

  const { data: latestProducts } = useLatestProductQuery();
  const { findAreaData } = useSakenowaAreas();

  useEffect(() => {
    if (brandSelection && 'brand_name' in brandSelection) {
      postForm.setFieldValue('product', brandSelection);
      postForm.setFieldValue('area_id', brandSelection.area_id);
    } else if (brandSelection && 'breweryId' in brandSelection) {
      const area = findAreaData(brandSelection);
      postForm.setFieldValue('area_id', area?.id ?? 0);
    } else {
      postForm.setFieldValue('product', null);
      postForm.setFieldValue('area_id', 0);
    }
  }, [brandSelection]);

  // Render =================================================================

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        postForm.handleSubmit();
      }}>
        <div className="flex flex-col gap-y-3">
          <AppField name="brand">
            {(field) => (
              <field.BrandSelector
                placeholder="銘柄（例：八海山）"
                defaultOptions={latestProducts}
              />
            )}
          </AppField>
          <AppField name="product">
            {(field) => (
              <field.ProductSelector
                placeholder="名称（例：純米大吟醸 雪室貯蔵三年）"
                brandSelection={brandSelection}
              />
            )}
          </AppField>
          <AppField name="comment">
            {(field) => <field.Textarea placeholder="香りや味わいは？" />}
          </AppField>
          <AppField name="user_name">
            {(field) => (
              <div className="flex justify-end items-center gap-x-4">
                <label>署名</label>
                <field.TextField placeholder="" />
              </div>
            )}
          </AppField>
          <AppForm>
            <SubmitButton type="submit">投稿</SubmitButton>
          </AppForm>
        </div>
      </form>

      <pre hidden className="mt-3 text-xs text-gray-400">
        {JSON.stringify(formValues, null, 2)}
      </pre>
    </>
  );
}
