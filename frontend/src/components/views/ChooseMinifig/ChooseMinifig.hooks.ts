import { useEffect, useState } from 'react';
import { useCart } from '@/context/cart';
import { MinifigType } from '@/types/minifig';
import { fetchMinifigs } from './utils';

export const useChooseMinifig = () => {
  const { cartDispatch, selectedMinifig } = useCart();

  const [minifigs, setMinifigs] = useState<MinifigType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMinifigs()
      .then((res) => {
        setMinifigs(res);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const addToCart = (minifig: MinifigType) => {
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

  return {
    minifigs,
    isLoading,
    selectedMinifig,
    addToCart,
  };
};
