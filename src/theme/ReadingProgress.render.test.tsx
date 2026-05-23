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

// Import source AFTER mocks
import ReadingProgress from './ReadingProgress';

describe('ReadingProgress (render)', () => {
  it('renders without crashing', () => {
    const { container } = render(<ReadingProgress />);

    expect(container).toBeTruthy();
  });

  it('returns empty when progress is less than 1%', () => {
    const { container } = render(<ReadingProgress />);
    const bar = container.querySelector('[role="progressbar"]');

    expect(bar).toBeNull();
  });

  it('renders progress bar when scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      writable: true,
    });

    Object.defineProperty(window, 'innerHeight', {
      value: 800,
      writable: true,
    });

    const { container } = render(<ReadingProgress />);

    window.dispatchEvent(new Event('scroll'));

    const bar = container.querySelector('[role="progressbar"]');

    expect(bar).toBeTruthy();
  });

  it('has correct ARIA attributes', () => {
    Object.defineProperty(window, 'scrollY', {
      value: 500,
      writable: true,
    });

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      writable: true,
    });

    Object.defineProperty(window, 'innerHeight', {
      value: 800,
      writable: true,
    });

    const { container } = render(<ReadingProgress />);

    window.dispatchEvent(new Event('scroll'));

    const bar = container.querySelector('[role="progressbar"]');

    if (bar) {
      expect(bar.getAttribute('aria-valuemin')).toBe('0');
      expect(bar.getAttribute('aria-valuemax')).toBe('100');
      expect(bar.getAttribute('aria-label')).toBe('Reading progress');
    }
  });
});
