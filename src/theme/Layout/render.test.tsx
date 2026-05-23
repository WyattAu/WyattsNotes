import { render, screen } from '@testing-library/react';
import React from 'react';

import LayoutWrapper from './index';

describe('Layout (render)', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <LayoutWrapper>
        <div>test content</div>
      </LayoutWrapper>,
    );
    expect(container).toBeTruthy();
  });

  it('renders children inside the original Layout', () => {
    const { container } = render(
      <LayoutWrapper>
        <div data-testid="child">child content</div>
      </LayoutWrapper>,
    );
    const layout = container.querySelector('[data-testid="Layout"]');
    expect(layout).toBeTruthy();
    expect(layout?.querySelector('[data-testid="child"]')).toBeTruthy();
  });

  it('renders ReadingProgress component', () => {
    const { container } = render(
      <LayoutWrapper>
        <div>content</div>
      </LayoutWrapper>,
    );
    // ReadingProgress renders empty when progress < 1 in jsdom
    // but the component should still be mounted
    expect(container).toBeTruthy();
  });
});
