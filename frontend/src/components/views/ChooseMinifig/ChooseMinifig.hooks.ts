import { useEffect, useState } from 'react';
import { useCart } from '@/context/cart';
import { MinifigType } from '@/types/minifig';
import { fetchMinifigs } from './utils';
import { useNavigate } from 'react-router-dom';

export const useChooseMinifig = () => {
  const { cartDispatch, selectedMinifig } = useCart();
  const navigate = useNavigate();

  const [minifigs, setMinifigs] = useState<MinifigType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    cartDispatch({ type: 'clearCart' });
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

  const redirectToCheckout = () => {
    if (selectedMinifig) {
      return navigate('/checkout');
    }
  };

  return {
    minifigs,
    isLoading,
    selectedMinifig,
    addToCart,
    redirectToCheckout,
  };
};
