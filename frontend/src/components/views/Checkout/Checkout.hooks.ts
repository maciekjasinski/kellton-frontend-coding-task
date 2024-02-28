import { useCart } from '@/context/cart';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCheckout = () => {
  const navigate = useNavigate();
  const { selectedMinifig, cartDispatch } = useCart();

  const handleSubmit = (values: any) => {
    // API CALL
    console.log(values);
    cartDispatch({ type: 'clearCart' });
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    selectedMinifig,
    handleSubmit,
  };
};
