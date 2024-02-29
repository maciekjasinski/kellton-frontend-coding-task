import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import { PartCard } from './PartCard';

describe('PartCard', () => {
  it('should create snapshot', () => {
    const part = {
      id: 'a1',
      name: 'Test Minifig',
      picture: 'http://example.com/image.png',
    };
    const card = renderer.create(<PartCard {...part} />);
    expect(card).toMatchSnapshot();
  });
});
