// @ts-check
// Docusaurus config for the Programming sub-site.
// Build: pnpm run build -- --config docusaurus.programming.config.ts
// Contains: C++, Java, Python, Rust, Dart
// Total: ~167K lines across 2 docs plugins.

import type * as Preset from '@docusaurus/preset-classic';
import {
  createAlgoliaConfig,
  createCommonDocsPluginConfig,
  sharedColorMode,
  sharedConfig,
  sharedMermaid,
  sharedPlugins,
  sharedPrism,
  sharedThemeConfigMetadata,
  sharedZoom,
} from './docusaurus.shared.config';

const commonDocsPluginConfig = createCommonDocsPluginConfig();

const algoliaConfig = createAlgoliaConfig('wyattsnotes_programming');

const config = {
  ...sharedConfig({
    title: "Wyatt's Notes — Programming",
    tagline: 'C++, Java, Python, Rust, Dart',
    url: 'https://programming.wyattau.com',
    algoliaIndexName: 'wyattsnotes_programming',
    socialCard: '/img/social-cards/programming.png',
  }),

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/tags/**'],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ...sharedPlugins('wyattsnotes-programming'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cpp-notes',
        path: 'docs/docs_cpp',
        routeBasePath: '/docs/cpp',
        sidebarPath: require.resolve('./sidebars/sidebar_cpp.ts'),
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_cpp/{dir}',
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'languages-notes',
        path: 'docs/docs_languages',
        routeBasePath: '/docs/languages',
        sidebarPath: require.resolve('./sidebars/sidebar_languages.ts'),
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_languages/{dir}',
        ...commonDocsPluginConfig,
      },
    ],
  ],

  themeConfig: {
    algolia: algoliaConfig,
    metadata: sharedThemeConfigMetadata,
    image: 'img/WyattsNotes/WyattsNotesSocialCard.jpg',
    navbar: {
      title: "Wyatt's Notes",
      logo: {
        alt: "Wyatt's Notes",
        src: 'img/WyattsNotes/WyattsNotesLogo.svg',
        srcDark: 'img/WyattsNotes/WyattsNotesLogo.svg',
      },
      items: [
        { type: 'search', position: 'right' },
        { to: '/docs/cpp/intro', label: 'C++', position: 'left' },
        { to: '/docs/languages/java/intro', label: 'Languages', position: 'left' },
        {
          href: 'https://wyattsnotes.wyattau.com',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://academics.wyattau.com',
          label: 'Academics',
          position: 'right',
        },
        {
          href: 'https://alevel.wyattau.com',
          label: 'A-Levels',
          position: 'right',
        },
        {
          href: 'https://university.wyattau.com',
          label: 'University',
          position: 'right',
        },
        {
          href: 'https://github.com/WyattAu/WyattsNotes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: sharedColorMode,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Languages',
          items: [
            { label: 'C++', to: '/docs/cpp/intro' },
            { label: 'Java', to: '/docs/languages/java/intro' },
            { label: 'Python', to: '/docs/languages/python/intro' },
            { label: 'Rust', to: '/docs/languages/rust/intro' },
            { label: 'Dart', to: '/docs/languages/dart/intro' },
            { label: 'Go', to: '/docs/languages/go/intro' },
            { label: 'Kotlin', to: '/docs/languages/kotlin/intro' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              href: 'https://wyattsnotes.wyattau.com',
            },
            {
              label: 'Academics',
              href: 'https://academics.wyattau.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WyattAu/WyattsNotes',
            },
            {
              label: 'Donate',
              href: 'https://gravatar.com/wyattau',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Wyatt Au. Content is licensed under <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">AGPLv3</a>.`,
    },
    prism: {
      ...sharedPrism,
      additionalLanguages: ['java', 'dart', 'rust', 'go', 'kotlin'],
    },
    mermaid: sharedMermaid,
    zoom: sharedZoom,
  } satisfies Preset.ThemeConfig,
};

export default config;
