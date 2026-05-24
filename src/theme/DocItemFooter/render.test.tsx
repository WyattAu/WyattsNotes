import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

// Mock Docusaurus modules (vi.mock is hoisted automatically)
vi.mock('@docusaurus/ExecutionEnvironment', () => ({
  default: { canUseDOM: true },
}));

vi.mock('@theme-original/DocItemFooter', () => ({
  default: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="DocItemFooter-mock">{children}</div>
  ),
}));

import DocItemFooterWrapper from './index';

describe('DocItemFooter render', () => {
  it('renders reading time in document', async () => {
    const article = document.createElement('article');

    article.textContent = 'word '.repeat(300).trim();
    document.body.appendChild(article);

    render(<DocItemFooterWrapper />);

    await new Promise((r) => setTimeout(r, 100));

    const readingTimeDiv = document.querySelector('div[style*="opacity"]');

    expect(readingTimeDiv).toBeTruthy();

    document.body.removeChild(article);
  });

  it('renders without reading time when no article exists', async () => {
    render(<DocItemFooterWrapper />);

    await new Promise((r) => setTimeout(r, 100));

    const readingTimeDiv = document.querySelector('div[style*="opacity"]');

    expect(readingTimeDiv).toBeFalsy();
  });
});
