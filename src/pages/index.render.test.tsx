import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import Home from './index';

// Mock useDocusaurusContext
vi.mock('@docusaurus/useDocusaurusContext', () => ({
  default: () => ({
    siteConfig: { title: "Wyatt's Notes", tagline: 'Test Tagline' },
  }),
}));

describe('Index Page (render)', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });

  it('displays site tagline', () => {
    render(<Home />);
    expect(screen.getByText('Test Tagline')).toBeTruthy();
  });

  it('renders subject cards', () => {
    const { container } = render(<Home />);
    // Should have multiple subject cards with links
    const links = container.querySelectorAll('a[href*="wyattau.com"]');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders stats section', () => {
    const { container } = render(<Home />);
    // The page has stats showing files count (comma-formatted or raw number)
    const text = container.textContent ?? '';
    expect(text.includes('1,478') || text.includes('1478')).toBe(true);
  });
});
