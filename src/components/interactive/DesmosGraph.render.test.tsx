import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./styles.module.css', () => ({
  default: new Proxy({}, { get: (_, key) => key }),
}));

import { DesmosGraph } from './DesmosGraph';

describe('DesmosGraph (render)', () => {
  it('returns null when no expressions and no calculatorUrl', () => {
    const { container } = render(<DesmosGraph />);

    expect(container.innerHTML).toBe('');
  });

  it('renders iframe when calculatorUrl provided', () => {
    const { container } = render(
      <DesmosGraph calculatorUrl="https://www.desmos.com/calculator/abc123" />,
    );

    const iframe = container.querySelector('iframe');

    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toBe('https://www.desmos.com/calculator/abc123');
  });

  it('applies correct aspect padding', () => {
    const { container } = render(
      <DesmosGraph calculatorUrl="https://example.com" width={800} height={500} />,
    );

    const responsiveDiv = container.querySelector('[style*="padding-bottom"]');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(responsiveDiv!.style.paddingBottom).toBe('62.5%');
  });

  it('renders title for iframe mode', () => {
    render(<DesmosGraph calculatorUrl="https://example.com" title="My Graph" />);

    expect(screen.getByText('My Graph')).toBeInTheDocument();
  });

  it('renders title for programmatic mode with expressions', () => {
    render(<DesmosGraph expressions={['x^2']} title="Expr Graph" />);

    expect(screen.getByText('Expr Graph')).toBeInTheDocument();
  });

  it('has correct sandbox attribute for iframe mode', () => {
    const { container } = render(<DesmosGraph calculatorUrl="https://example.com" />);

    const iframe = container.querySelector('iframe');

    expect(iframe.getAttribute('sandbox')).toBe('allow-scripts allow-same-origin');
  });
});
