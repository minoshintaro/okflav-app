import { type PostResponse } from '../../../entities/posts';
import { type ProductResponse } from '../../../entities/products';

export function getProductFromPost(data: PostResponse): ProductResponse {
  return {
    id: data.product_id,
    name: data.product_name,
    brand_id: data.brand_id,
    brand_name: data.brand_name,
    area_id: data.area_id,
    area_name: data.area_name,
  };
}
