// @ts-check
// Docusaurus config for the A-Level Maths & Physics sub-site.
// Build: npx docusaurus build --config docusaurus.alevel-maths-physics.config.ts
// Contains: maths, further-maths, physics (~83K lines)

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import {
  createCommonDocsPluginConfig,
  sharedPlugins,
  sharedConfig,
  createAlgoliaConfig,
  sharedThemeConfigMetadata,
  sharedColorMode,
  sharedPrism,
  sharedMermaid,
  sharedZoom,
} from './docusaurus.shared.config';

const config: Config = {
  ...sharedConfig({
    title: "Wyatt's Notes — A-Level Maths & Physics",
    tagline: 'A-Level Maths, Further Maths & Physics',
    url: 'https://alevel-maths-physics.wyattau.com',
    algoliaIndexName: 'wyattsnotes_alevel_maths_physics',
  }),

  plugins: [
    ...sharedPlugins(),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'alevel-maths-physics',
        path: 'docs/docs_alevel',
        routeBasePath: '/docs/alevel',
        sidebarPath: require.resolve('./sidebars/sidebar_alevel_maths_physics.ts'),
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_alevel/{dir}',
        include: ['maths/**', 'further-maths/**', 'physics/**', 'intro.md'],
        ...createCommonDocsPluginConfig(true),
      },
    ],
  ],

  themeConfig: {
    algolia: createAlgoliaConfig('wyattsnotes_alevel_maths_physics'),
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
        { to: '/docs/alevel/intro', label: 'A-Levels', position: 'left' },
        {
          href: 'https://alevel-sciences.wyattau.com',
          label: 'A-Level Sciences',
          position: 'left',
        },
        {
          href: 'https://qualifications.wyattau.com',
          label: 'Other Quals',
          position: 'left',
        },
        {
          href: 'https://ib.wyattau.com',
          label: 'IB',
          position: 'right',
        },
        {
          href: 'https://dse.wyattau.com',
          label: 'DSE',
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
            { label: 'A-Level Maths & Physics', to: '/docs/alevel/intro' },
            {
              label: 'A-Level Sciences',
              href: 'https://alevel-sciences.wyattau.com/docs/alevel/intro',
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
              label: 'Qualifications',
              href: 'https://qualifications.wyattau.com',
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
    prism: sharedPrism,
    mermaid: sharedMermaid,
    zoom: sharedZoom,
  } satisfies Preset.ThemeConfig,
};

export default config;
