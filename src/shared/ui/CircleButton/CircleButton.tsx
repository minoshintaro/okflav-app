import * as Headless from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';

type CircleButtonProps = {
  icon: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function CircleButton({ icon, disabled, onClick }: CircleButtonProps) {
  return (
    <Headless.Button
      disabled={disabled}
      onClick={onClick}
      className="grid place-items-center rounded-full w-14 h-14 text-white bg-black hover:bg-amber-600 duration-200 transition-bg"
    >
      {icon === 'plus' && <PlusIcon className="size-8" />}
    </Headless.Button>
  );
}
