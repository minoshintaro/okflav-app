import { createFileRoute } from '@tanstack/react-router';
import { queryClient } from '../../shared/api';
import { getLatestPostQueryOptions } from '../../entities/posts';
import { Home } from '../../pages/Home';
import { Error } from '../../pages/Error';
import { Loading } from '../../pages/Loading';

export const Route = createFileRoute('/_page/')({
  loader: () => queryClient.ensureQueryData(getLatestPostQueryOptions()),
  component: Home,
  pendingComponent: Loading,
  errorComponent: Error,
})
