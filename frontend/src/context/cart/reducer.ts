import { Action, State } from './types';

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addMinifig': {
      return {
        ...state,
        selectedMinifig: {
          ...action.minifig,
          parts: [],
        },
      };
    }
    case 'addMinifigParts': {
      return {
        ...state,
        selectedMinifig: {
          ...state.selectedMinifig,
          parts: action.parts,
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
