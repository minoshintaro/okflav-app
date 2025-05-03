import { useState } from 'react';
import { useFieldContext } from '../../../shared/model';
import { Combobox } from '../../../shared/ui';
import { type ProductResponse } from '../../../entities/products';
import { useSakenowaBrands, type SakenowaBrand } from '../../../entities/sakenowa';
import { getBrandName, getBrandProductName } from '../model/getName';
import { type BrandComboboxOption } from '../model/schemas';

type BrandSelectorProps = {
  placeholder: string;
  defaultOptions: ProductResponse[];
};

export function BrandSelector({
  placeholder,
  defaultOptions,
}: BrandSelectorProps) {
  /**
   * Tanstack
   * - Tanstack Form: コンテキストからValueを取得
   * - Tanstack Query: 保持したさけのわ銘柄によるフィルター
  */
  const { state, handleChange } = useFieldContext<BrandComboboxOption | null>();
  const { filterSakenowaBrands } = useSakenowaBrands();

  /**
   * State
   * - 入力クエリ
   * - 銘柄候補: 初期値は最新の銘柄商品、入力に応じてさけのわ銘柄から検出
   */
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState<(ProductResponse | SakenowaBrand)[]>(defaultOptions);

  const handleQueryChange = (query: string) => {
    setQuery(query);
    setOptions(query === '' ? defaultOptions : filterSakenowaBrands(query));
  };

  const handleClose = () => {
    setQuery('');
    setOptions(defaultOptions);
  };

  const handleDisplayValue = (item: BrandComboboxOption | null) => {
    return item ? getBrandName(item) : '';
  };

  const handleDisplayOption = (item: BrandComboboxOption | null) => {
    return item ? getBrandProductName(item) : '';
  };

  return (
    <>
      <pre hidden className="text-xs text-gray-400">
        BrandSelector: {JSON.stringify(state.value, null, 2)}
      </pre>
      <Combobox
        value={state.value}
        placeholder={placeholder}
        options={options}
        query={query}
        onValueChange={handleChange} // (value: T) => void;
        onQueryChange={handleQueryChange} // (query: string) => void
        onClose={handleClose} // () => void;
        formatDisplayValue={handleDisplayValue}
        formatDisplayOption={handleDisplayOption}
      />
    </>
  );
}
