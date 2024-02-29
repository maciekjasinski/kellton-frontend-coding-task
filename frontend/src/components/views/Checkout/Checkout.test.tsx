import { expect, describe, it, vi } from 'vitest';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { CartStateContext } from '@/context/cart/utils';
import { Checkout } from './Checkout';
import { validationSchema } from './utils';

// @ts-ignore
window.scrollTo = vi.fn();

describe('ChooseMinifig', () => {
  it('should create a snapshot with empty cart', () => {
    const dispatch = vi.fn();
    const page = renderer.create(
      <BrowserRouter>
        <CartStateContext.Provider
          value={{
            cartDispatch: dispatch,
            selectedMinifig: null,
          }}
        >
          <Checkout />
        </CartStateContext.Provider>
      </BrowserRouter>,
    );
    expect(page).toMatchSnapshot();
  });

  it('should create a snapshot', () => {
    const dispatch = vi.fn();
    const page = renderer.create(
      <BrowserRouter>
        <CartStateContext.Provider
          value={{
            cartDispatch: dispatch,
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
          }}
        >
          <Checkout />
        </CartStateContext.Provider>
      </BrowserRouter>,
    );
    expect(page).toMatchSnapshot();
  });
});

describe('Validation', () => {
  it('should validate form successfully', async () => {
    const isValid = await validationSchema.isValid({
      name: 'Joe',
      surname: 'Doe',
      phoneNumber: '12312312312',
      email: 'joe@doe.com',
      dateOfBirth: '2000-03-29',
      address: 'Street 1',
      city: 'New Yrok',
      state: 'New York',
      zipCode: '10000',
    });
    expect(isValid).toEqual(true);
  });

  it('should throw error with empty form', async () => {
    const isValid = await validationSchema.isValid({
      name: '',
      surname: '',
      phoneNumber: '',
      email: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    });
    expect(isValid).toEqual(false);
  });

  it('phone number should be not valid', async () => {
    const isValid = await validationSchema.isValid({
      name: 'Joe',
      surname: 'Doe',
      phoneNumber: '123',
      email: 'joe@doe.com',
      dateOfBirth: '2000-03-29',
      address: 'Street 1',
      city: 'New Yrok',
      state: 'New York',
      zipCode: '10000',
    });
    expect(isValid).toEqual(false);
  });

  it('date of birth should be minimum 18 years old', async () => {
    const isValid = await validationSchema.isValid({
      name: 'Joe',
      surname: 'Doe',
      phoneNumber: '12312312312',
      email: 'joe@doe.com',
      dateOfBirth: '2007-03-29',
      address: 'Street 1',
      city: 'New Yrok',
      state: 'New York',
      zipCode: '10000',
    });
    expect(isValid).toEqual(false);
  });
});
