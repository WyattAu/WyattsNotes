// @ts-check
// Docusaurus config for the DSE sub-site.
// Build: pnpm run build -- --config docusaurus.dse.config.ts
// Contains: HKDSE only (1 docs plugin)
// Total: ~50K lines.

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

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

const config: Config = {
  ...sharedConfig({
    title: "Wyatt's Notes — DSE",
    tagline: 'HKDSE Biology, Chemistry, Economics, ICT, Maths, Physics',
    url: 'https://dse.wyattau.com',
    algoliaIndexName: 'wyattsnotes_dse',
  }),

  plugins: [
    ...sharedPlugins(),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dse-notes',
        path: 'docs/docs_dse',
        routeBasePath: '/docs/dse',
        sidebarPath: require.resolve('./sidebars/sidebar_dse.ts'),
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_dse/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
  ],

  themeConfig: {
    algolia: createAlgoliaConfig('wyattsnotes_dse'),
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
        { to: '/docs/dse/intro', label: 'DSE', position: 'left' },
        {
          href: 'https://ib.wyattau.com',
          label: 'IB',
          position: 'left',
        },
        {
          href: 'https://alevel.wyattau.com',
          label: 'A-Levels',
          position: 'left',
        },
        {
          href: 'https://qualifications.wyattau.com',
          label: 'Other Quals',
          position: 'left',
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
            { label: 'DSE', to: '/docs/dse/intro' },
            {
              label: 'IB',
              href: 'https://ib.wyattau.com/docs/ib/intro',
            },
            {
              label: 'A-Levels',
              href: 'https://alevel.wyattau.com/docs/alevel/intro',
            },
            {
              label: 'GCSE',
              href: 'https://qualifications.wyattau.com/docs/qualifications/gcse/intro',
            },
            {
              label: 'AP',
              href: 'https://qualifications.wyattau.com/docs/qualifications/ap/intro',
            },
            {
              label: 'Scottish Highers',
              href: 'https://qualifications.wyattau.com/docs/qualifications/scottish-highers',
            },
            {
              label: 'Irish LC',
              href: 'https://qualifications.wyattau.com/docs/qualifications/ilc/intro',
            },
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
              label: 'Qualifications',
              href: 'https://qualifications.wyattau.com',
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
    prism: sharedPrism,
    mermaid: sharedMermaid,
    zoom: sharedZoom,
  } satisfies Preset.ThemeConfig,
};

export default config;
