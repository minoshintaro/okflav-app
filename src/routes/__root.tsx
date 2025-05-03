import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../shared/ui';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <header className="sticky z-50 top-0">
        <Header />
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
