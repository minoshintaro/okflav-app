import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_editor')({
  component: Layout,
})

function Layout() {
  return (
    <>
      <main className="mx-auto max-w-[640px] px-6">
        <Outlet />
      </main>
    </>
  )
}
