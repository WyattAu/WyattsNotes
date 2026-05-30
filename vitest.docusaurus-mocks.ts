import { vi } from 'vitest';

import type { ReactNode } from 'react';

const mocks = vi.hoisted(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require('react');

  const h = React.createElement;

  const identity = (dataTestId: string) => {
    const Component = ({ children }: { children?: ReactNode }) =>
      h('div', { 'data-testid': dataTestId }, children);

    Component.displayName = dataTestId;

    return Component;
  };

  return {
    executionEnv: {
      canUseDOM: true,
      canUseIntersectionObserver: true,
      canUseViewport: true,
    },
    link: ({
      to,
      children,
      ...rest
    }: {
      to: string;
      children: ReactNode;
      [key: string]: unknown;
    }) => h('a', { href: to, ...rest }, children),
    useDocusaurusContext: () => ({
      siteConfig: { title: "Wyatt's Notes", tagline: 'Free study notes' },
    }),
    head: () => null,
    themeOriginalLayout: identity('Layout'),
    themeOriginalDocItemFooter: identity('DocItemFooter'),
    themeOriginalMDXComponents: {},
    themeHeading: ({ as, children }: { as: string; children: ReactNode }) => h(as, null, children),
    themeLayout: identity('Layout'),
    themeSearchBar: () => h('div', { 'data-testid': 'SearchBar' }),
    themeMermaid: {},
  };
});

vi.mock('@docusaurus/ExecutionEnvironment', () => ({
  ExecutionEnvironment: mocks.executionEnv,
  default: mocks.executionEnv,
}));

vi.mock('@docusaurus/Link', () => ({
  default: mocks.link,
}));

vi.mock('@docusaurus/useDocusaurusContext', () => ({
  default: mocks.useDocusaurusContext,
}));

vi.mock('@docusaurus/Head', () => ({
  default: mocks.head,
}));

vi.mock('@theme-original/Layout', () => ({
  default: mocks.themeOriginalLayout,
}));

vi.mock('@theme-original/DocItemFooter', () => ({
  default: mocks.themeOriginalDocItemFooter,
}));

vi.mock('@theme-original/MDXComponents', () => ({
  default: mocks.themeOriginalMDXComponents,
}));

vi.mock('@theme/Heading', () => ({
  default: mocks.themeHeading,
}));

vi.mock('@theme/Layout', () => ({
  default: mocks.themeLayout,
}));

vi.mock('@theme/SearchBar', () => ({
  default: mocks.themeSearchBar,
}));

vi.mock('@theme/Mermaid', () => ({
  default: mocks.themeMermaid,
}));
