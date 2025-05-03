import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '../../../shared/model';
import { Button, Textarea, TextField } from '../../../shared/ui';
import { BrandSelector } from '../ui/BrandSelector';
import { ProductSelector } from '../ui/ProductSelector';

export const { useAppForm } = createFormHook({
  fieldComponents: { BrandSelector, ProductSelector, Textarea, TextField },
  formComponents: { SubmitButton: Button },
  fieldContext,
  formContext,
});
