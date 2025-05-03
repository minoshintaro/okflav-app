import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { queryClient } from '../../shared/api';
import { getUserPostQueryOptions } from '../../entities/posts';
import { PostCollection } from '../../pages/PostCollection';
import { NotFound } from '../../pages/NotFound';

export const Route = createFileRoute('/_page/posts/users/$id')({
  loader: ({ params }) => queryClient.ensureQueryData(getUserPostQueryOptions(params.id)),
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams();
  const { data } = useQuery(getUserPostQueryOptions(id));
  if (!data) return <NotFound />;

  return <PostCollection title={data[0].user_name} data={data} />;
}
