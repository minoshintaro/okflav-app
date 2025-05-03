import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { queryClient } from '../../shared/api';
import { getProductPostQueryOptions } from '../../entities/posts';
import { PostCollection } from '../../pages/PostCollection';
import { NotFound } from '../../pages/NotFound';

export const Route = createFileRoute('/_page/posts/products/$id')({
  loader: ({ params }) => queryClient.ensureQueryData(getProductPostQueryOptions(params.id)),
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams();
  const { data } = useQuery(getProductPostQueryOptions(id));
  if (!data) return <NotFound />;

  return <PostCollection title={data[0].brand_name} data={data} />;
}
