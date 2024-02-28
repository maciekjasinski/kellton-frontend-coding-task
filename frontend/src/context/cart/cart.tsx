import { ReactNode, useReducer } from 'react';
import { CartStateContext, initialValues } from './utils';
import { cartReducer } from './reducer';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialValues);

  const value = {
    ...state,
    cartDispatch: dispatch,
  };

  return <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>;
};
