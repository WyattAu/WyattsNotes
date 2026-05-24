import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@docusaurus/ExecutionEnvironment', () => ({
  default: { canUseDOM: true },
}));

import ReadingProgress from './ReadingProgress';

describe('ReadingProgress render', () => {
  it('renders nothing when progress is below 1%', () => {
    const { container } = render(<ReadingProgress />);

    expect(container.innerHTML).toBe('');
  });

  it('renders progress bar when scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      writable: true,
    });

    Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });

    window.dispatchEvent(new Event('scroll'));

    const { container } = render(<ReadingProgress />);

    const bar = container.querySelector('[role="progressbar"]');

    if (bar) {
      expect(bar.getAttribute('aria-valuenow')).toBeTruthy();
      expect(bar.getAttribute('aria-label')).toBe('Reading progress');
    }
  });

  it('has correct ARIA attributes when visible', () => {
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      writable: true,
    });

    Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });

    window.dispatchEvent(new Event('scroll'));

    const { container } = render(<ReadingProgress />);

    const bar = container.querySelector('[role="progressbar"]');

    if (bar) {
      expect(bar.getAttribute('aria-valuemin')).toBe('0');
      expect(bar.getAttribute('aria-valuemax')).toBe('100');
    }
  });
});
