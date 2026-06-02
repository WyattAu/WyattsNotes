import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

vi.mock('./TOCSidebar.module.css', () => ({
  default: new Proxy({}, { get: (_, key) => key }),
}));

import TOCSidebar from '.';

const mockToc = [
  { id: 'section-1', level: 2, title: 'Section 1' },
  { id: 'section-2', level: 3, title: 'Section 2' },
  { id: 'section-3', level: 2, title: 'Section 3' },
];

describe('TOCSidebar (render)', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  it('renders TOC items', () => {
    render(<TOCSidebar toc={mockToc} />);

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Section 3')).toBeInTheDocument();
  });

  it('toggles visibility on button click', () => {
    render(<TOCSidebar toc={mockToc} />);

    const toggleBtn = screen.getByLabelText('Toggle TOC');

    expect(toggleBtn).toHaveTextContent('Hide TOC');

    act(() => {
      toggleBtn.click();
    });

    expect(screen.getByLabelText('Toggle TOC')).toHaveTextContent('Show TOC');
  });

  it('reads stored visibility from localStorage', () => {
    localStorageMock.setItem('tocVisible', 'false');

    render(<TOCSidebar toc={mockToc} />);

    expect(screen.getByLabelText('Toggle TOC')).toHaveTextContent('Show TOC');
  });

  it('persists visibility to localStorage on toggle', () => {
    render(<TOCSidebar toc={mockToc} />);

    expect(localStorageMock.setItem).toHaveBeenCalledWith('tocVisible', 'true');

    act(() => {
      screen.getByLabelText('Toggle TOC').click();
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith('tocVisible', 'false');
  });
});
