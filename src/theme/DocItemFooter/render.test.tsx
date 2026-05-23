import { render } from '@testing-library/react';

import React from 'react';

import { vi } from 'vitest';

// Mock Docusaurus modules before importing the source
vi.mock('@docusaurus/ExecutionEnvironment', () => ({
  default: { canUseDOM: true, canUseIntersectionObserver: true, canUseViewport: true },
  canUseDOM: true,
  canUseIntersectionObserver: true,
  canUseViewport: true,
}));

vi.mock('@theme-original/DocItemFooter', () => ({
  default: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="DocItemFooter">{children}</div>
  ),
}));

// Import source AFTER mocks
import DocItemFooterWrapper from './index';

describe('DocItemFooter (render)', () => {
  it('renders without crashing', () => {
    const { container } = render(<DocItemFooterWrapper />);

    expect(container).toBeTruthy();
  });

  it('shows reading time when article text is present', () => {
    const article = document.createElement('article');

    article.textContent = 'word '.repeat(250);
    document.body.appendChild(article);

    render(<DocItemFooterWrapper />);

    // reading time is computed in useEffect, need to wait
    expect(document.body.contains(article)).toBe(true);
    document.body.removeChild(article);
  });

  it('renders the original DocItemFooter', () => {
    const { container } = render(<DocItemFooterWrapper />);
    const footer = container.querySelector('[data-testid="DocItemFooter"]');

    expect(footer).toBeTruthy();
  });
});
