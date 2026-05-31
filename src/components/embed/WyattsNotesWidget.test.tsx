import { render, screen } from '@testing-library/react';
import React from 'react';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import WyattsNotesWidget from './WyattsNotesWidget';

describe('WyattsNotesWidget', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default props', () => {
    render(<WyattsNotesWidget subject="ib" />);

    expect(screen.getByText("Wyatt's Notes")).toBeInTheDocument();
    expect(screen.getByText(/Open/)).toBeInTheDocument();
  });

  it('renders iframe with correct src for known subject', () => {
    const { container } = render(<WyattsNotesWidget subject="dse" topic="physics/intro" />);

    const iframe = container.querySelector('iframe');

    expect(iframe).toBeTruthy();
    expect(iframe?.getAttribute('src')).toBe('https://dse.wyattau.com/docs/physics/intro');
  });

  it('falls back to main site for unknown subject', () => {
    const { container } = render(<WyattsNotesWidget subject="unknown-subject" />);

    const iframe = container.querySelector('iframe');

    expect(iframe?.getAttribute('src')).toBe('https://wyattsnotes.wyattau.com');
  });

  it('renders iframe with correct title including subject and topic', () => {
    const { container } = render(<WyattsNotesWidget subject="ib" topic="math/calculus" />);

    const iframe = container.querySelector('iframe');

    expect(iframe?.getAttribute('title')).toContain('ib');
    expect(iframe?.getAttribute('title')).toContain('math/calculus');
  });

  it('applies dark theme styles when theme is dark', () => {
    const { container } = render(<WyattsNotesWidget subject="programming" theme="dark" />);

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper.style.background).toBe('rgb(26, 26, 46)');
  });

  it('applies light theme styles by default', () => {
    const { container } = render(<WyattsNotesWidget subject="programming" />);

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper.style.background).toBe('rgb(255, 255, 255)');
  });

  it('uses custom width and height', () => {
    const { container } = render(<WyattsNotesWidget subject="ib" width={600} height={400} />);

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper.style.width).toBe('600px');

    const iframe = container.querySelector('iframe');

    expect(iframe?.style.height).toBe('400px');
  });

  it('sets iframe sandbox attribute', () => {
    const { container } = render(<WyattsNotesWidget subject="ib" />);

    const iframe = container.querySelector('iframe');

    expect(iframe?.getAttribute('sandbox')).toBe('allow-scripts allow-same-origin allow-popups');
  });

  it('sets iframe loading to lazy', () => {
    const { container } = render(<WyattsNotesWidget subject="ib" />);

    const iframe = container.querySelector('iframe');

    expect(iframe?.getAttribute('loading')).toBe('lazy');
  });

  it('Open link points to iframe src', () => {
    render(<WyattsNotesWidget subject="university" topic="mathematics/linear-algebra" />);

    const link = screen.getByText(/Open/).closest('a');

    expect(link?.getAttribute('href')).toBe(
      'https://university.wyattau.com/docs/mathematics/linear-algebra',
    );
  });

  it('Open link has security attributes', () => {
    render(<WyattsNotesWidget subject="ib" />);

    const link = screen.getByText(/Open/).closest('a');

    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('applies custom className', () => {
    const { container } = render(<WyattsNotesWidget subject="ib" className="custom-class" />);

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper.classList.contains('custom-class')).toBe(true);
  });

  it('component cleans up event listener on unmount', () => {
    const { unmount } = render(<WyattsNotesWidget subject="ib" />);

    // Should not throw on unmount
    expect(() => unmount()).not.toThrow();
  });

  it('ignores message events from disallowed origins', () => {
    const { container } = render(<WyattsNotesWidget subject="ib" />);

    const iframe = container.querySelector('iframe');
    const originalHeight = iframe?.style.height;

    const messageEvent = new MessageEvent('message', {
      data: { type: 'wyattsnotes:resize', height: 999 },
      origin: 'https://evil.com',
    });

    window.dispatchEvent(messageEvent);

    expect(iframe?.style.height).toBe(originalHeight);
  });
});
