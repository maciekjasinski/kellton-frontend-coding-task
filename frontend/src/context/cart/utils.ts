import { createContext } from 'react';
import { CartContextInterface, State } from './types';

export const CartStateContext = createContext<CartContextInterface | undefined>(undefined);

export const initialValues = {
  cart: [],
} as State;
