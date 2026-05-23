import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import ReadingProgress from './ReadingProgress';

function setScrollDimensions(scrollY: number, innerHeight: number, scrollHeight: number) {
  Object.defineProperty(window, 'scrollY', { value: scrollY, configurable: true });
  Object.defineProperty(window, 'innerHeight', { value: innerHeight, configurable: true });
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    value: scrollHeight,
    configurable: true,
  });
}

describe('ReadingProgress (render)', () => {
  it('renders empty when progress < 1', () => {
    setScrollDimensions(0, 800, 1600);
    const { container } = render(<ReadingProgress />);

    expect(container.innerHTML).toBe('');
  });

  it('renders progress bar when progress >= 1', async () => {
    setScrollDimensions(100, 800, 2000);

    render(<ReadingProgress />);

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  it('has correct ARIA attributes', async () => {
    setScrollDimensions(500, 800, 2000);

    render(<ReadingProgress />);

    const bar = await screen.findByRole('progressbar');

    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
    expect(bar).toHaveAttribute('aria-label', 'Reading progress');
    const now = bar.getAttribute('aria-valuenow');

    expect(Number(now)).toBeGreaterThanOrEqual(1);
    expect(Number(now)).toBeLessThanOrEqual(100);
  });

  it('uses fixed positioning', async () => {
    setScrollDimensions(200, 800, 2000);

    render(<ReadingProgress />);

    const bar = await screen.findByRole('progressbar');

    expect(bar.style.position).toBe('fixed');
    expect(bar.style.top).toBe('0px');
    expect(bar.style.left).toBe('0px');
  });
});
