import { useState } from 'react';
import { Combobox } from '../../../shared/ui';
import { useFieldContext } from '../../../shared/model';
import { type SakenowaBrand } from '../../../entities/sakenowa';
import { useBrandProductQuery } from '../../../entities/products';
import { getBrandName } from '../model/getName';
import { type ProductComboboxOption } from '../model/schemas';

type ProductSelectorProps = {
  placeholder: string;
  brandSelection: SakenowaBrand | ProductComboboxOption | null;
};

export function ProductSelector({
  placeholder,
  brandSelection,
}: ProductSelectorProps) {
  /**
   * Tanstack
   * - Tanstack Form: コンテキストからValueを取得
   * - Tanstack Query: 銘柄選択に応じてDBから銘柄商品を取得（該当がなければ []）
   */
  const { state, handleChange } = useFieldContext<ProductComboboxOption | null>();
  const { data: brandProducts } = useBrandProductQuery(
    brandSelection ? getBrandName(brandSelection) : ''
  );

  /** State
   * - 入力クエリ
   */
  const [query, setQuery] = useState('');

  const handleQueryChange = (query: string) => {
    setQuery(query);
  };

  const handleClose = () => {
    setQuery('');
  };

  const handleDisplayValue = (item: SakenowaBrand | ProductComboboxOption | null) => {
    return item ? item.name : '';
  };

  const handleDisplayOption = (item: SakenowaBrand | ProductComboboxOption | null) => {
    return item ? item.name : '';
  };

  return (
    <>
      <pre hidden className="text-xs text-gray-400">
        ProductSelector: {JSON.stringify(state.value, null, 2)}
      </pre>
      <Combobox
        value={state.value}
        placeholder={placeholder}
        options={brandProducts}
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
