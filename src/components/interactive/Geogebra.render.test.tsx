import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./styles.module.css', () => ({
  default: new Proxy({}, { get: (_, key) => key }),
}));

import { Geogebra } from './Geogebra';

describe('Geogebra (render)', () => {
  it('renders iframe with correct URL', () => {
    const { container } = render(<Geogebra appletId="abc123" />);

    const iframe = container.querySelector('iframe');

    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toContain('geogebra.org/material/iframe/id/abc123');
  });

  it('applies custom width/height in URL', () => {
    const { container } = render(<Geogebra appletId="xyz" width={1024} height={768} />);

    const iframe = container.querySelector('iframe');

    expect(iframe.src).toContain('width/1024/height/768');
  });

  it('renders title', () => {
    render(<Geogebra appletId="abc123" title="My Applet" />);

    expect(screen.getByText('My Applet')).toBeInTheDocument();
  });

  it('has correct sandbox attribute', () => {
    const { container } = render(<Geogebra appletId="abc123" />);

    const iframe = container.querySelector('iframe');

    expect(iframe.getAttribute('sandbox')).toBe('allow-scripts allow-same-origin allow-popups');
  });

  it('computes correct aspect padding', () => {
    const { container } = render(<Geogebra appletId="abc123" width={800} height={600} />);

    const responsiveDiv = container.querySelector('[style*="padding-bottom"]');

    expect(responsiveDiv).toBeInTheDocument();
    expect(responsiveDiv?.getAttribute('style')).toContain('padding-bottom: 75%');
  });
});
