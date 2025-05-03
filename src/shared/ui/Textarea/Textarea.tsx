import * as Headless from '@headlessui/react';
import { useFieldContext } from '../../model/formContext';

type TextareaProps = {
  placeholder?: string;
};

export function Textarea({ placeholder = '' }: TextareaProps) {
  const { state, handleChange } = useFieldContext<string>();

  return (
    <Headless.Textarea
      placeholder={placeholder}
      value={state.value}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-lg bg-gray-100 border border-gray-100 px-4 py-2 min-h-40 field-sizing-content resize-none"
    />
  );
}
