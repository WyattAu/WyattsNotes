import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import LayoutWrapper from '../Layout';

vi.mock('../../theme/ReadingProgress', () => ({
  __esModule: true,
  default: () => <div data-testid="ReadingProgress" />,
}));

describe('Layout wrapper (render)', () => {
  it('renders children', () => {
    render(
      <LayoutWrapper>
        <p>Child content</p>
      </LayoutWrapper>,
    );

    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('includes ReadingProgress component', () => {
    render(
      <LayoutWrapper>
        <p>Content</p>
      </LayoutWrapper>,
    );

    expect(screen.getByTestId('ReadingProgress')).toBeInTheDocument();
  });
});
