import { expect, describe, it } from 'vitest';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '@/context/cart';
import { ChooseMinifig } from './ChooseMinifig';
import { getRandomId } from './utils';

describe('Should generate a list with random ids', () => {
  it('should return an array of length 3', () => {
    expect(getRandomId(10)).toHaveLength(3);
  });

  it('should return an array', () => {
    const result = getRandomId(10);
    expect(result).toBeInstanceOf(Array);
  });

  it('should contain unique ids', () => {
    const result = getRandomId(10);
    const unique = new Set(result);
    expect(unique.size).toBe(result.length);
  });

  it('should return empty array', () => {
    const arrayLength = 0;
    const result = getRandomId(arrayLength);
    expect(result.length).toBe(arrayLength);
  });

  it('should return array with one element', () => {
    const arrayLength = 1;
    const result = getRandomId(arrayLength);
    expect(result.length).toBe(arrayLength);
  });
});

describe('ChooseMinifig', () => {
  it('should create a snapshot', () => {
    const page = renderer.create(
      <BrowserRouter>
        <CartProvider>
          <ChooseMinifig />
        </CartProvider>
      </BrowserRouter>,
    );
    expect(page).toMatchSnapshot();
  });
});
