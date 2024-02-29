import { describe, it, expect } from 'vitest';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
  it('should create snapshot', () => {
    const page = renderer.create(
      <Layout>
        <div>Children</div>
      </Layout>,
    );
    expect(page).toMatchSnapshot();
  });

  it('page should have a title', () => {
    render(
      <Layout>
        <div>Children</div>
      </Layout>,
    );
    expect(screen.getByText('Children')).toBeDefined();
  });
});
