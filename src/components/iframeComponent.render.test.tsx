import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import IFrameComponent from './iframeComponent';

describe('IFrameComponent (render)', () => {
  it('renders iframe with correct src', () => {
    const { container } = render(<IFrameComponent src="https://example.com/embed" />);

    const iframe = container.querySelector('iframe');

    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toBe('https://example.com/embed');
  });

  it('applies default width/height', () => {
    const { container } = render(<IFrameComponent src="https://example.com/embed" />);

    const iframe = container.querySelector('iframe');

    expect(iframe.width).toBe('800px');
    expect(iframe.height).toBe('200px');
  });

  it('applies custom width/height', () => {
    const { container } = render(
      <IFrameComponent src="https://example.com/embed" width="100%" height="500px" />,
    );

    const iframe = container.querySelector('iframe');

    expect(iframe.width).toBe('100%');
    expect(iframe.height).toBe('500px');
  });

  it('renders title when provided', () => {
    render(<IFrameComponent src="https://example.com/embed" title="My Tool" />);

    expect(screen.getByText('My Tool')).toBeInTheDocument();
  });

  it('has correct aria-label', () => {
    const { container } = render(
      <IFrameComponent src="https://example.com/embed" ariaLabel="Embedded calculator" />,
    );

    const iframe = container.querySelector('iframe');

    expect(iframe.getAttribute('aria-label')).toBe('Embedded calculator');
  });
});
