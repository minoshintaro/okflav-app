import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { CircleButton } from '../shared/ui';

export const Route = createFileRoute('/_page')({
  component: Layout,
})

function Layout() {
  return (
    <>
      <main className="mx-auto max-w-[640px] min-h-full px-6 pb-22">
        <Outlet />
      </main>
      <nav className="fixed z-10 inset-x-0 bottom-4 mx-auto w-14">
        <Link to="/edit/post/$id" params={{ id: '0' }}>
          <CircleButton icon="plus" />
        </Link>
      </nav>
    </>
  )
}
