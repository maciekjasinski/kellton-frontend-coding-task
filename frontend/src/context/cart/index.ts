import { useContext } from 'react';

import { CartProvider } from './cart';
import { CartStateContext } from './utils';

const useCart = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCart must be used within an CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
