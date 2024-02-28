import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { MinifigPartType } from '@/types/minifig';
import { useCart } from '@/context/cart';
import { FormikValuesInterface } from '../../Checkout.interface';
import { fetchParts } from './utils';

export const useSummary = () => {
  const { selectedMinifig, cartDispatch } = useCart();
  const { values, isSubmitting } = useFormikContext<FormikValuesInterface>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedMinifig && selectedMinifig.parts.length === 0) {
      setIsLoading(true);
      fetchParts(selectedMinifig.setId)
        .then((res) => {
          cartDispatch({ type: 'addMinifigParts', parts: res });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedMinifig]);

  return {
    selectedMinifig,
    parts: (selectedMinifig?.parts || []) as MinifigPartType[],
    isLoading,
    disabled: Object.values(values).some((value) => !value),
    isSubmitting,
  };
};
