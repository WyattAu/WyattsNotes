import { render } from '@testing-library/react';
import React from 'react';

import { describe, expect, it, vi } from 'vitest';

import Layout from './index';

// Mock ReadingProgress to test Layout wrapper in isolation
vi.mock('../ReadingProgress', () => ({
  default: () => <div data-testid="reading-progress" />,
}));

// Mock the original Layout
vi.mock('@theme-original/Layout', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="original-layout">{children}</div>
  ),
}));

describe('Layout', () => {
  it('renders without crashing', () => {
    const { container } = render(<Layout>Test content</Layout>);

    expect(container.firstChild).toBeTruthy();
  });

  it('wraps children in original Layout', () => {
    const { getByTestId, getByText } = render(<Layout>Test content</Layout>);

    expect(getByTestId('original-layout')).toBeInTheDocument();
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('renders ReadingProgress component', () => {
    const { getByTestId } = render(<Layout>Content</Layout>);

    expect(getByTestId('reading-progress')).toBeInTheDocument();
  });

  it('renders as a fragment with two children', () => {
    const { container } = render(<Layout>Content</Layout>);

    expect(container.children[0].getAttribute('data-testid')).toBe('original-layout');
    expect(container.children[1].getAttribute('data-testid')).toBe('reading-progress');
  });
});
