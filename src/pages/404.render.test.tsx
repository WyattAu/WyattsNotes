import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./404.module.css', () => ({
  default: new Proxy({}, { get: (_, key) => key }),
}));

import NotFoundPage from './404';

describe('404 page (render)', () => {
  it('renders 404 heading', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('This page does not exist.')).toBeInTheDocument();
  });

  it('renders search bar', () => {
    render(<NotFoundPage />);

    expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
  });

  it('renders subject cards grid', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('Browse all subjects')).toBeInTheDocument();
    expect(screen.getByText('IB Notes')).toBeInTheDocument();
    expect(screen.getByText('A-Level')).toBeInTheDocument();
    expect(screen.getByText('DSE')).toBeInTheDocument();
    expect(screen.getByText('GCSE')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Rust')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('Linux')).toBeInTheDocument();
  });

  it('renders subject cards as links', () => {
    render(<NotFoundPage />);

    const ibLink = screen.getByText('IB Notes').closest('a');

    expect(ibLink).toHaveAttribute('href', 'https://ib.wyattau.com/docs/ib/intro');
  });
});
