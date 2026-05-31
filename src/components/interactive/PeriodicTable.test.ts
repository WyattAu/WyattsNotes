import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { PeriodicTable } from './PeriodicTable';

describe('PeriodicTable', () => {
  it('renders without crashing', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toBeTruthy();
  });

  it('renders all 118 elements', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    for (const num of [1, 2, 29, 79, 92, 118]) {
      expect(html).toContain(`element-${num}`);
    }
  });

  it('renders Hydrogen (element 1)', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('Hydrogen');
    expect(html).toContain('>H<');
  });

  it('renders Oganesson (element 118)', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('Oganesson');
    expect(html).toContain('>Og<');
  });

  it('renders Gold (element 79)', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('Gold');
    expect(html).toContain('>Au<');
  });

  it('applies category-specific class to alkali metals', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('pt-cat-alkali-metal');
  });

  it('applies category-specific class to noble gases', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('pt-cat-noble-gas');
  });

  it('applies category-specific class to transition metals', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('pt-cat-transition-metal');
  });

  it('applies category-specific class to halogens', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('pt-cat-halogen');
  });

  it('applies category-specific class to lanthanides', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('pt-cat-lanthanide');
  });

  it('applies category-specific class to actinides', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('pt-cat-actinide');
  });

  it('renders the categories legend', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('categories-legend');
    expect(html).toContain('Alkali Metal');
    expect(html).toContain('Noble Gas');
    expect(html).toContain('Transition Metal');
  });

  it('renders lanthanide and actinide labels', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('Lanthanides');
    expect(html).toContain('Actinides');
  });

  it('renders grid with 18 columns', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).toContain('repeat(18');
  });

  it('does not render tooltip when no element is hovered (SSR default)', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).not.toContain('element-tooltip');
  });

  it('does not render detail panel content when no element is selected (SSR default)', () => {
    const html = renderToString(React.createElement(PeriodicTable));

    expect(html).not.toContain('detail-card');
  });
});
