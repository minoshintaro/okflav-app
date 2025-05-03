import * as Headless from '@headlessui/react';
import { TrashIcon } from '@heroicons/react/24/solid';

type DeleteButtonProps = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function DeleteButton({ disabled, onClick }: DeleteButtonProps) {
  return (
    <Headless.Button
      disabled={disabled}
      onClick={onClick}
      className="flex items-center gap-1 text-sm text-gray-400 hover:text-amber-600 duration-200 transition-text"
    >
      <TrashIcon className="size-5" />
      削除
    </Headless.Button>
  );
}
