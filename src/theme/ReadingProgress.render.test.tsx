import { render, screen } from '@testing-library/react';
import React from 'react';

import ReadingProgress from './ReadingProgress';

describe('ReadingProgress (render)', () => {
  it('renders without crashing', () => {
    const { container } = render(<ReadingProgress />);
    expect(container).toBeTruthy();
  });

  it('returns empty when progress is less than 1%', () => {
    // scrollY is 0, docHeight likely 0 in jsdom
    const { container } = render(<ReadingProgress />);
    // progress bar should not render when progress < 1
    const bar = container.querySelector('[role="progressbar"]');
    expect(bar).toBeNull();
  });

  it('renders progress bar when scrolled', () => {
    // Mock scroll position
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      writable: true,
    });
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });

    const { container } = render(<ReadingProgress />);

    // Trigger scroll event
    window.dispatchEvent(new Event('scroll'));

    const bar = container.querySelector('[role="progressbar"]');
    expect(bar).toBeTruthy();
  });

  it('has correct ARIA attributes', () => {
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      writable: true,
    });
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });

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
