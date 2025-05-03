import * as Headless from '@headlessui/react';
import { normalizeText } from '../../utils/normalizeText';
import type { ComboboxOption } from '../../model/schemas';

type ComboboxProps<T extends ComboboxOption> = {
  /** Combobox */
  value: T | null;
  onValueChange: (value: T | null) => void;
  onClose: () => void;

  /** ComboboxInput */
  placeholder: string;
  formatDisplayValue?: (selection: T | null) => string;
  onQueryChange: (query: string) => void;

  /** ComboboxOptions */
  options: T[];
  query: string;
  formatDisplayOption?: (option: T | null) => string;
};

export function Combobox<T extends ComboboxOption>({
  value,
  placeholder,
  options,
  query,
  onValueChange,
  onQueryChange,
  onClose,
  formatDisplayValue,
  formatDisplayOption,
}: ComboboxProps<T>) {
  const normalizedQuery = normalizeText(query);
  const canAddQuery = () => {
    return query.length > 0 && !options.some(item => normalizeText(item.name) === normalizedQuery);
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.target.value);
  };

  const handleDisplayValue = (item: T) => {
    return formatDisplayValue ? formatDisplayValue(item) : item.name;
  };

  const handleDisplayOption = (item: T) => {
    return formatDisplayOption ? formatDisplayOption(item) : item.name;
  };

  return (
    <Headless.Combobox
      value={value}
      onChange={onValueChange} // (value: T) => void;
      onClose={onClose} // () => void;
      immediate={true}
    >
      <Headless.ComboboxInput
        placeholder={placeholder}
        displayValue={handleDisplayValue} // (item: T) => string
        onChange={handleQueryChange} // (event: Event) => void
        autoComplete="off"
        className="rounded-full bg-gray-100 border border-gray-100 px-4 py-2"
      />
      <Headless.ComboboxOptions
        anchor="bottom start"
        className="w-fit rounded border bg-white space-y-1 p-1 empty:invisible"
      >
        {canAddQuery() && (
          <Headless.ComboboxOption
            value={{ id: null, name: query }}
            className="p-1 cursor-pointer text-gray-500 data-[focus]:bg-blue-100"
          >
            {query}
          </Headless.ComboboxOption>
        )}
        {options.filter(item => item.id !== null).map(item => (
          <Headless.ComboboxOption
            key={item.id}
            value={item}
            className="p-1 cursor-pointer data-[focus]:bg-blue-100"
          >
            {handleDisplayOption(item)}
          </Headless.ComboboxOption>
        ))}
      </Headless.ComboboxOptions>
    </Headless.Combobox>
  );
}
