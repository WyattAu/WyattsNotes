import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// Mock ExecutionEnvironment before importing component
vi.mock('@docusaurus/ExecutionEnvironment', () => ({
  default: { canUseDOM: true },
}));

// Mock @theme-original/DocItemFooter
vi.mock('@theme-original/DocItemFooter', () => ({
  default: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="DocItemFooter-mock">{children}</div>
  ),
}));

// Import must come after vi.mock calls
import DocItemFooterWrapper from './index';

describe('DocItemFooter render', () => {
  it('renders reading time in document', async () => {
    // Create an article element with content
    const article = document.createElement('article');

    article.textContent = 'word '.repeat(300).trim();
    document.body.appendChild(article);

    render(<DocItemFooterWrapper />);

    // Wait for useEffect to fire
    await new Promise((r) => setTimeout(r, 100));

    // The reading time div should be in the document
    const readingTimeDiv = document.querySelector('div[style*="opacity"]');

    expect(readingTimeDiv).toBeTruthy();

    // Cleanup
    document.body.removeChild(article);
  });

  it('renders without reading time when no article exists', async () => {
    render(<DocItemFooterWrapper />);

    await new Promise((r) => setTimeout(r, 100));

    // No reading time should appear
    const readingTimeDiv = document.querySelector('div[style*="opacity"]');

    expect(readingTimeDiv).toBeFalsy();
  });
});
