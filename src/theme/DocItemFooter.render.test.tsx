import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';

import DocItemFooterWrapper from './DocItemFooter';

describe('DocItemFooter (render)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders reading time text when article element exists', async () => {
    const article = document.createElement('article');

    article.textContent = 'word '.repeat(250).trim();
    document.body.appendChild(article);

    render(<DocItemFooterWrapper />);

    await waitFor(() => {
      expect(screen.getByText(/min read/)).toBeInTheDocument();
    });
  });

  it('renders the original DocItemFooter component', async () => {
    const article = document.createElement('article');

    article.textContent = 'some text';
    document.body.appendChild(article);

    render(<DocItemFooterWrapper />);

    expect(screen.getByTestId('DocItemFooter')).toBeInTheDocument();
  });

  it('does NOT render reading time when no article element exists', async () => {
    render(<DocItemFooterWrapper />);

    await waitFor(() => {
      expect(screen.queryByText(/min read/)).not.toBeInTheDocument();
    });

    expect(screen.getByTestId('DocItemFooter')).toBeInTheDocument();
  });
});
