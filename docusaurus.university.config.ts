// @ts-check
// Docusaurus config for the University sub-site.
// Build: pnpm run build -- --config docusaurus.university.config.ts
// Contains: Mathematics, Physics, Computing (university-level)
// Total: ~4K lines across 1 docs plugin.

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

const config = {
  ...sharedConfig({
    title: "Wyatt's Notes — University",
    tagline: 'Mathematics, Physics, and Computing for Undergraduates',
    url: 'https://university.wyattau.com',
    algoliaIndexName: 'wyattsnotes_university',
  }),

  plugins: [
    ...sharedPlugins('wyattsnotes-university'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university',
        path: 'docs/docs_university',
        routeBasePath: '/docs',
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/{dir}',
        ...createCommonDocsPluginConfig(),
      },
    ],
  ],

  themeConfig: {
    algolia: createAlgoliaConfig('wyattsnotes_university'),
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
        { to: '/docs/intro', label: 'University', position: 'left' },
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
          href: 'https://qualifications.wyattau.com',
          label: 'Qualifications',
          position: 'right',
        },
        {
          href: 'https://programming.wyattau.com',
          label: 'Programming',
          position: 'right',
        },
        {
          href: 'https://wyattsnotes.wyattau.com',
          label: 'Main Site',
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
          title: 'University Subjects',
          items: [
            { label: 'Mathematics', to: '/docs/mathematics/linear-algebra' },
            { label: 'Physics', to: '/docs/physics/classical-mechanics' },
            { label: 'Computing', to: '/docs/computing/algorithms-and-data-structures' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Academics',
              href: 'https://academics.wyattau.com',
            },
            {
              label: 'A-Levels',
              href: 'https://alevel.wyattau.com',
            },
            {
              label: 'Qualifications',
              href: 'https://qualifications.wyattau.com',
            },
            {
              label: 'Programming',
              href: 'https://programming.wyattau.com',
            },
            {
              label: 'Main Site',
              href: 'https://wyattsnotes.wyattau.com',
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
    prism: sharedPrism,
    mermaid: sharedMermaid,
    zoom: sharedZoom,
  } satisfies Preset.ThemeConfig,
};

export default config;
