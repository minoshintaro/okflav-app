import * as Headless from '@headlessui/react';
import { useRouter, useCanGoBack, useRouterState } from '@tanstack/react-router'
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

export function BackNav() {
  const router = useRouter()
  const canGoBack = useCanGoBack()
  const { location } = useRouterState();

  const isHome = location.pathname === '/';
  const isDisabled = isHome || !canGoBack;

  return (
    <>
      <Headless.Button
        disabled={isDisabled}
        onClick={() => router.history.back()}
        className=" hover:text-amber-600 duration-200 transition-text data-[disabled]:opacity-0"
      >
        <ArrowLeftCircleIcon className="size-6" />
      </Headless.Button>
    </>
  );
}
