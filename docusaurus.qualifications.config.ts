// @ts-check
// Docusaurus config for the Qualifications sub-site.
// Build: npx docusaurus build --config docusaurus.qualifications.config.ts
// Contains: GCSE, AP, Scottish Highers, Irish LC
// Total: ~75K lines across 1 docs plugin.

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
    title: "Wyatt's Notes — Qualifications",
    tagline: 'GCSE, AP, Scottish Highers, Irish Leaving Certificate',
    url: 'https://qualifications.wyattau.com',
    algoliaIndexName: 'wyattsnotes_qualifications',
    socialCard: '/img/social-cards/qualifications.png',
  }),

  // AP content has placeholder links to future pages
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    ...sharedPlugins('wyattsnotes-qualifications'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'qualifications-notes',
        path: 'docs/docs_qualifications',
        routeBasePath: '/docs/qualifications',
        sidebarPath: require.resolve('./sidebars/sidebar_qualifications.ts'),
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_qualifications/{dir}',
        ...createCommonDocsPluginConfig(),
      },
    ],
  ],

  themeConfig: {
    algolia: createAlgoliaConfig('wyattsnotes_qualifications'),
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
        { to: '/docs/qualifications/gcse/intro', label: 'GCSE', position: 'left' },
        { to: '/docs/qualifications/ap/intro', label: 'AP', position: 'left' },
        { to: '/docs/qualifications/highers/intro', label: 'Highers', position: 'left' },
        { to: '/docs/qualifications/ilc/intro', label: 'Irish LC', position: 'left' },
        {
          href: 'https://alevel.wyattau.com',
          label: 'A-Levels',
          position: 'right',
        },
        {
          href: 'https://academics.wyattau.com',
          label: 'Academics',
          position: 'right',
        },
        {
          href: 'https://wyattsnotes.wyattau.com',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://programming.wyattau.com',
          label: 'Programming',
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
          title: 'Exam Boards',
          items: [
            {
              label: 'A-Levels',
              href: 'https://alevel.wyattau.com/docs/alevel/intro',
            },
            { label: 'GCSE', to: '/docs/qualifications/gcse/intro' },
            { label: 'AP', to: '/docs/qualifications/ap/intro' },
            {
              label: 'Scottish Highers',
              to: '/docs/qualifications/highers/intro',
            },
            { label: 'Irish LC', to: '/docs/qualifications/ilc/intro' },
            {
              label: 'IB',
              href: 'https://ib.wyattau.com/docs/ib/intro',
            },
            {
              label: 'DSE',
              href: 'https://dse.wyattau.com/docs/dse/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'A-Levels',
              href: 'https://alevel.wyattau.com',
            },
            {
              label: 'Academics',
              href: 'https://academics.wyattau.com',
            },
            {
              label: 'Main Site',
              href: 'https://wyattsnotes.wyattau.com',
            },
            {
              label: 'Programming',
              href: 'https://programming.wyattau.com',
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
      additionalLanguages: ['java', 'dart'],
    },
    mermaid: sharedMermaid,
    zoom: sharedZoom,
  } satisfies Preset.ThemeConfig,
};

export default config;
