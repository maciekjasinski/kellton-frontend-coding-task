import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '@/context/cart';
import { FormikValuesInterface } from './Checkout.interface';

export const useCheckout = () => {
  const navigate = useNavigate();
  const { selectedMinifig, cartDispatch } = useCart();

  const handleSubmit = async (values: FormikValuesInterface) => {
    return axios
      .post('/kellton-frontend-coding-task/api/checkout', values)
      .then(() => {
        cartDispatch({ type: 'clearCart' });
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    selectedMinifig,
    handleSubmit,
  };
};
