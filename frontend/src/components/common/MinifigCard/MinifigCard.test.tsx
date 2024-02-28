import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import { MinifigCard } from './MinifigCard';

describe('MinifigCard', () => {
  it('should create snapshot', () => {
    const minifig = {
      name: 'Test Minifig',
      detailsUrl: 'http://example.com/',
      picture: 'http://example.com/image.png',
      setId: 'a1',
    };
    const card = renderer.create(<MinifigCard {...minifig} />);
    expect(card).toMatchSnapshot();
  });

  it('should create snapshot without picture', () => {
    const minifig = {
      name: 'Test Minifig',
      detailsUrl: 'http://example.com/',
      picture: null,
      setId: 'a1',
    };
    const card = renderer.create(<MinifigCard {...minifig} />);
    expect(card).toMatchSnapshot();
  });
});
