import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import DocItemFooterWrapper from './index';

function makeWords(n: number): string {
  return Array.from({ length: n }, (_, i) => `word${i}`).join(' ');
}

describe('DocItemFooterWrapper (render)', () => {
  it('renders reading time when article has 300+ words', () => {
    const article = document.createElement('article');

    article.textContent = makeWords(400);
    document.body.appendChild(article);

    render(<DocItemFooterWrapper />);

    expect(screen.getByText(/min read/)).toBeInTheDocument();
    document.body.removeChild(article);
  });

  it('renders without reading time when no article exists', () => {
    const existing = document.querySelector('article');

    if (existing) {
      document.body.removeChild(existing);
    }

    render(<DocItemFooterWrapper />);

    expect(screen.queryByText(/min read/)).not.toBeInTheDocument();
    expect(screen.getByTestId('DocItemFooter')).toBeInTheDocument();
  });
});
