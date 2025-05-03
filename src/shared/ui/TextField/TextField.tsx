import * as Headless from '@headlessui/react';
import { useFieldContext } from '../../model/formContext';

type TextFieldProps = {
  placeholder?: string;
};

export function TextField({ placeholder = '' }: TextFieldProps) {
  const { state, handleChange } = useFieldContext<string>();

  return (
    <Headless.Input
      type="text"
      placeholder={placeholder}
      value={state.value}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-full bg-gray-100 border border-gray-100 px-4 py-2"
    />
  );
}
