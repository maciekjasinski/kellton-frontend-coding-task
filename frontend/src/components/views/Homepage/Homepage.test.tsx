import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Homepage } from './Homepage';

describe('Homepage', () => {
  it('should create snapshot', () => {
    const page = renderer.create(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    );
    expect(page).toMatchSnapshot();
  });

  it('page should have a title', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>,
    );
    expect(screen.getByText('Lego minifigs mystery box')).toBeDefined();
  });
});
