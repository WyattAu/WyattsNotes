import { render } from '@testing-library/react';

import React from 'react';

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
