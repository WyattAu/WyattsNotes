import { act, render } from '@testing-library/react';
import React from 'react';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';

import ReadingProgress from './ReadingProgress';

const originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY');

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true });
}

describe('ReadingProgress (render)', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = '';
    document.body.innerHTML = '';
  });

  afterAll(() => {
    if (originalScrollY) {
      Object.defineProperty(window, 'scrollY', originalScrollY);
    }
  });

  it('renders nothing when progress < 1%', () => {
    document.documentElement.innerHTML = '<div style="height:10000px"></div>';
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 10000,
      configurable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
      value: 1000,
      configurable: true,
    });
    setScrollY(0);

    const { container } = render(<ReadingProgress />);

    expect(container.innerHTML).toBe('');
  });

  it('renders progress bar with correct ARIA attributes when scrolled', () => {
    document.documentElement.innerHTML = '<div style="height:10000px"></div>';
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 10000,
      configurable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
      value: 1000,
      configurable: true,
    });

    const { container } = render(<ReadingProgress />);

    setScrollY(4500);

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    const bar = container.querySelector('[role="progressbar"]');

    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('role', 'progressbar');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
    expect(bar).toHaveAttribute('aria-label', 'Reading progress');
    const val = Number(bar?.getAttribute('aria-valuenow'));

    expect(val).toBeGreaterThan(1);
    expect(val).toBeLessThanOrEqual(100);
    expect(bar?.getAttribute('style')).toContain(`width: ${Math.round((4500 / 9000) * 100)}%`);
  });
});
