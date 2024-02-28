import { MinifigCardProps } from '@/components/common/MinifigCard/MinifigCard.interface';
import { useEffect, useState } from 'react';
import { fetchMinifigs } from './utils';
import { useCart } from '@/context/cart';

export const useChooseMinifig = () => {
  const { cartDispatch, selectedMinifig } = useCart();

  const [minifigs, setMinifigs] = useState<MinifigCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchMinifigs()
        .then((res) => {
          setMinifigs(res);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const addToCart = (minifig: MinifigCardProps) => {
    if (minifig.name === selectedMinifig?.name) {
      return cartDispatch({
        type: 'clearCart',
      });
    }
    return cartDispatch({
      type: 'addMinifig',
      minifig: minifig,
    });
  };

  console.log('selectedMinifig', selectedMinifig);

  return {
    minifigs,
    isLoading,
    selectedMinifig,
    addToCart,
  };
};
