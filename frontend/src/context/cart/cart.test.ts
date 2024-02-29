import { expect, describe, it } from 'vitest';
import { cartReducer } from './reducer';
import { Action } from './types';

describe('cart reducer', () => {
  it('should add minigfig to state', () => {
    const state = {
      selectedMinifig: null,
    };
    const action = {
      type: 'addMinifig',
      minifig: {
        name: 'Minifig',
        detailsUrl: '',
        picture: null,
        setId: 's1',
      },
    } as Action;
    const newState = cartReducer(state, action);
    expect(newState).toEqual({
      selectedMinifig: {
        name: 'Minifig',
        detailsUrl: '',
        picture: null,
        setId: 's1',
        parts: [],
      },
    });
  });

  it('should add minigfig parts to state', () => {
    const state = {
      selectedMinifig: {
        name: 'Minifig',
        detailsUrl: '',
        picture: null,
        setId: 's1',
        parts: [],
      },
    };
    const action = {
      type: 'addMinifigParts',
      parts: [
        {
          id: 'p1',
          name: 'Part 1',
          picture: null,
        },
        {
          id: 'p2',
          name: 'Part 2',
          picture: null,
        },
      ],
    } as Action;
    const newState = cartReducer(state, action);
    expect(newState).toEqual({
      selectedMinifig: {
        name: 'Minifig',
        detailsUrl: '',
        picture: null,
        setId: 's1',
        parts: [
          {
            id: 'p1',
            name: 'Part 1',
            picture: null,
          },
          {
            id: 'p2',
            name: 'Part 2',
            picture: null,
          },
        ],
      },
    });
  });

  it('should clear cart', () => {
    const state = {
      selectedMinifig: {
        name: 'Minifig',
        detailsUrl: '',
        picture: null,
        setId: 's1',
        parts: [],
      },
    };
    const action = {
      type: 'clearCart',
    } as Action;
    const newState = cartReducer(state, action);
    expect(newState).toEqual({
      selectedMinifig: null,
    });
  });

  it('should throw error for unknown action type', () => {
    const state = {
      selectedMinifig: null,
    };
    const action = {
      type: 'unknownActionType',
    } as any;
    expect(() => cartReducer(state, action)).toThrowError('Error - unknown action type');
  });
});
