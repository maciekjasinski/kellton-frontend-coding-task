import { Action, State } from './types';

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addToCart': {
      return {
        ...state,
        selectedMinifig: {
          ...action.minifig,
          parts: {},
        },
      };
    }
    case 'clearCart': {
      return {
        ...state,
        selectedMinifig: null,
      };
    }
    default: {
      throw Error('Error - unknown action type');
    }
  }
};
