import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./index.module.css', () => ({
  default: new Proxy({}, { get: (_, key) => key }),
}));

import Home from './index';

describe('index page (render)', () => {
  it('renders the hero section with site title', () => {
    render(<Home />);

    expect(screen.getByText("Wyatt's Notes")).toBeInTheDocument();
    expect(screen.getByText('Free study notes')).toBeInTheDocument();
  });

  it('renders subject cards for each group', () => {
    render(<Home />);

    expect(screen.getByText('A-Level')).toBeInTheDocument();
    expect(screen.getByText('IB Notes')).toBeInTheDocument();
    expect(screen.getByText('DSE')).toBeInTheDocument();
    expect(screen.getByText('University Notes')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('Linux')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
  });

  it('renders stats section with file/line/subject counts', () => {
    render(<Home />);

    expect(screen.getByText('1478')).toBeInTheDocument();
    expect(screen.getByText('751K')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getAllByText('files').length).toBeGreaterThan(0);
    expect(screen.getAllByText('lines').length).toBeGreaterThan(0);
    expect(screen.getAllByText('subjects').length).toBeGreaterThan(0);
  });
});
