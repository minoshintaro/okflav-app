import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { queryClient } from '../../shared/api';
import { getPostQueryOptions } from '../../entities/posts';
import { PostCollection } from '../../pages/PostCollection';
import { NotFound } from '../../pages/NotFound';

export const Route = createFileRoute('/_page/posts/$id')({
  loader: ({ params }) => queryClient.ensureQueryData(getPostQueryOptions(params.id)),
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams();
  const { data } = useQuery(getPostQueryOptions(id));

  if (!data) return <NotFound />;

  return <PostCollection title={data[0].user_name} data={data} />;
}
