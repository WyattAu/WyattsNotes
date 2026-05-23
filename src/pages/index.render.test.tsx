import { render, screen } from '@testing-library/react';

import React from 'react';

import { vi } from 'vitest';

// Mock Docusaurus modules before importing the source
vi.mock('@docusaurus/useDocusaurusContext', () => ({
  default: () => ({
    siteConfig: { title: "Wyatt's Notes", tagline: 'Test Tagline' },
  }),
}));

vi.mock('@docusaurus/Link', () => ({
  default: ({ children, to, href }: { children?: React.ReactNode; to?: string; href?: string }) => (
    <a href={to || href}>{children}</a>
  ),
}));

vi.mock('@theme/Heading', () => ({
  default: ({ as, children }: { as: string; children: React.ReactNode }) => {
    const Tag = as as React.ElementType;

    return React.createElement(Tag, null, children);
  },
}));

vi.mock('@theme/Layout', () => ({
  default: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="Layout">{children}</div>
  ),
}));

// Import source AFTER mocks
import Home from './index';

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
    const links = container.querySelectorAll('a[href*="wyattau.com"]');

    expect(links.length).toBeGreaterThan(0);
  });

  it('renders stats section', () => {
    const { container } = render(<Home />);
    const text = container.textContent ?? '';

    expect(text.includes('1,478') || text.includes('1478')).toBe(true);
  });
});
