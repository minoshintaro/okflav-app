import * as Headless from '@headlessui/react';
import type { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, type = 'button', disabled, onClick }: ButtonProps) {
  return (
    <>
      <Headless.Button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className="rounded border px-4 py-2 hover:text-amber-600 duration-200 transition-text"
      >
        {children}
      </Headless.Button>
    </>
  );
}
