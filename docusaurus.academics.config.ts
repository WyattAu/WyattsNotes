// @ts-check
// Docusaurus config for the Academics sub-site.
// Build: pnpm run build -- --config docusaurus.academics.config.ts
// Contains: IB, A-Level, DSE, GCSE, AP, Scottish Highers, Irish LC
// Total: ~259K lines across 4 docs plugins.

import remarkGridTable from '@adobe/remark-gridtables';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkCodeSnippets from 'remark-code-snippets';
import remarkMath from 'remark-math';

const admonitionsConfig = {
  admonitions: {
    keywords: [
      'discord',
      'info',
      'success',
      'danger',
      'note',
      'tip',
      'warning',
      'important',
      'caution',
      'powershell',
      'security',
      'ninja',
      'release',
    ],
  },
};

const remarkPluginsConfig = {
  beforeDefaultRemarkPlugins: [remarkGridTable],
  remarkPlugins: [remarkMath, remarkCodeSnippets],
};

const katexIgnoreNewLineWarning = {
  strict: (errorCode: string) => {
    if (errorCode === 'newLineInDisplayMode') {
      return 'ignore';
    }

    return 'warn';
  },
};

const rehypePluginConfig = {
  rehypePlugins: [[rehypeKatex, katexIgnoreNewLineWarning]],
};

const commonDocsPluginConfig = {
  showLastUpdateTime: true,
  showLastUpdateAuthor: true,
  ...admonitionsConfig,
  ...remarkPluginsConfig,
  ...rehypePluginConfig,
};

const config: Config = {
  title: "Wyatt's Notes — Academics",
  tagline: 'IB, A-Level, DSE, GCSE, AP, Scottish Highers, Irish Leaving Certificate',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://academics.wyattau.com',
  baseUrl: '/',
  organizationName: 'WyattAu',
  projectName: 'WyattsNotes',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ib-notes',
        path: 'docs/docs_ib',
        routeBasePath: '/docs/ib',
        sidebarPath: require.resolve('./sidebars/sidebar_ib.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'alevel-notes',
        path: 'docs/docs_alevel',
        routeBasePath: '/docs/alevel',
        sidebarPath: require.resolve('./sidebars/sidebar_alevel.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dse-notes',
        path: 'docs/docs_dse',
        routeBasePath: '/docs/dse',
        sidebarPath: require.resolve('./sidebars/sidebar_dse.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'qualifications-notes',
        path: 'docs/docs_qualifications',
        routeBasePath: '/docs/qualifications',
        sidebarPath: require.resolve('./sidebars/sidebar_qualifications.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    ['docusaurus-plugin-image-zoom', { selector: '.markdown :not(a) > img' }],
    [
      '@r74tech/docusaurus-plugin-panzoom',
      {
        selector: '.mermaid svg',
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-redoc',
  ],

  themeConfig: {
    metadata: [
      {
        name: 'theme-color',
        content: '#FF6B35',
        media: '(prefers-color-scheme: light)',
      },
      {
        name: 'theme-color',
        content: '#2d2d2d',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    image: 'img/WyattNotes/WyattsNotesSocialCard.jpg',
    navbar: {
      title: "Wyatt's Notes",
      logo: {
        alt: "Wyatt's Notes",
        src: 'img/WyattsNotes/WyattsNotesLogo.svg',
        srcDark: 'img/WyattsNotes/WyattsNotesLogo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'ibSidebar',
          label: 'IB',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'alevelSidebar',
          label: 'A-Levels',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dseSidebar',
          label: 'DSE',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'qualificationsSidebar',
          label: 'Qualifications',
          position: 'left',
        },
        {
          href: 'https://wyattsnotes.wyattau.com',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://programming.wyattsnotes.wyattau.com',
          label: 'Programming',
          position: 'right',
        },
        {
          href: 'https://github.com/WyattAu/WyattsNotes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Exam Boards',
          items: [
            { label: 'IB', to: '/docs/ib/intro' },
            { label: 'A-Levels', to: '/docs/alevel/intro' },
            { label: 'DSE', to: '/docs/dse/intro' },
            { label: 'GCSE', to: '/docs/qualifications/gcse/intro' },
            { label: 'AP', to: '/docs/qualifications/ap/intro' },
            {
              label: 'Scottish Highers',
              to: '/docs/qualifications/highers/intro',
            },
            { label: 'Irish LC', to: '/docs/qualifications/ilc/intro' },
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
              label: 'Programming',
              href: 'https://programming.wyattsnotes.wyattau.com',
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
      theme: {
        ...prismThemes.gruvboxMaterialLight,
      },
      darkTheme: {
        ...prismThemes.gruvboxMaterialDark,
      },
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    zoom: {
      selector: '.markdown :not(a) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
