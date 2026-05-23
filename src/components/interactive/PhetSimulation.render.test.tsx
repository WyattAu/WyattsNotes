import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./styles.module.css', () => ({
  default: new Proxy({}, { get: (_, key) => key }),
}));

import { PhetSimulation } from './PhetSimulation';

describe('PhetSimulation (render)', () => {
  it('renders iframe with correct URL pattern', () => {
    const { container } = render(<PhetSimulation simulationId="projectile-motion" />);

    const iframe = container.querySelector('iframe');

    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toBe(
      'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html',
    );
  });

  it('applies custom dimensions in aspect padding', () => {
    const { container } = render(<PhetSimulation simulationId="test" width={800} height={400} />);

    const responsiveDiv = container.querySelector('[style*="padding-bottom"]') as HTMLElement;

    expect(responsiveDiv.style.paddingBottom).toBe('50%');
  });

  it('has correct sandbox attribute', () => {
    const { container } = render(<PhetSimulation simulationId="test" />);

    const iframe = container.querySelector('iframe');

    expect(iframe.getAttribute('sandbox')).toBe('allow-scripts allow-same-origin allow-popups');
  });

  it('renders title', () => {
    render(<PhetSimulation simulationId="test" title="My Simulation" />);

    expect(screen.getByText('My Simulation')).toBeInTheDocument();
  });
});
