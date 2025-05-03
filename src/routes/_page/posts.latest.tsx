import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { queryClient } from '../../shared/api';
import { getLatestPostQueryOptions } from '../../entities/posts';
import { PostCollection } from '../../pages/PostCollection';

export const Route = createFileRoute('/_page/posts/latest')({
  loader: () => queryClient.ensureQueryData(getLatestPostQueryOptions()),
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSuspenseQuery(getLatestPostQueryOptions());
  return <PostCollection title="新着" data={data} />
}
