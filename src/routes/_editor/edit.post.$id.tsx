import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { queryClient } from '../../shared/api';
import { getPostQueryOptions } from '../../entities/posts';
import { getLatestProductQueryOptions } from '../../entities/products';
import { getSakenowaAreaQueryOptions, getSakenowaBrandQueryOptions, getSakenowaBreweryQueryOptions } from '../../entities/sakenowa';
import { PostEditor } from '../../pages/PostEditor'

export const Route = createFileRoute('/_editor/edit/post/$id')({
  loader: async ({ params }) => {
    await Promise.all([
      params.id !== '0' ? queryClient.prefetchQuery(getPostQueryOptions(params.id)) : Promise.resolve(),
      queryClient.prefetchQuery(getLatestProductQueryOptions()),
      queryClient.prefetchQuery(getSakenowaAreaQueryOptions()),
      queryClient.prefetchQuery(getSakenowaBrandQueryOptions()),
      queryClient.prefetchQuery(getSakenowaBreweryQueryOptions()),
    ]);
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data } = useQuery(getPostQueryOptions(id));
  return <PostEditor data={data ? data[0] : undefined} />;
}
