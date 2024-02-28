import { useCart } from '@/context/cart';
import { useFormikContext } from 'formik';
import { FormikValuesInterface } from '../../Checkout.interface';
import { useEffect, useState } from 'react';
import { fetchParts } from './utils';

export const useSummary = () => {
  const { selectedMinifig } = useCart();
  const { values } = useFormikContext<FormikValuesInterface>();
  const [parts, setParts] = useState<any>([]);

  useEffect(() => {
    if (selectedMinifig) {
      try {
        fetchParts(selectedMinifig.setId).then((res) => {
          setParts(res);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [selectedMinifig]);

  return {
    selectedMinifig,
    disabled:
      !values.name ||
      !values.surname ||
      !values.phoneNumber ||
      !values.email ||
      !values.dateOfBirth ||
      !values.address ||
      !values.city ||
      !values.state ||
      !values.zipCode,
    parts,
  };
};
