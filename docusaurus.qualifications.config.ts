// @ts-check
// Docusaurus config for the Qualifications sub-site.
// Build: npx docusaurus build --config docusaurus.qualifications.config.ts
// Contains: GCSE, AP, Scottish Highers, Irish LC
// Total: ~75K lines across 1 docs plugin.

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
  title: "Wyatt's Notes — Qualifications",
  tagline: 'GCSE, AP, Scottish Highers, Irish Leaving Certificate',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://qualifications.wyattau.com',
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
        { to: '/docs/qualifications/gcse/intro', label: 'GCSE', position: 'left' },
        { to: '/docs/qualifications/ap/intro', label: 'AP', position: 'left' },
        { to: '/docs/qualifications/scottish-highers', label: 'Highers', position: 'left' },
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
            {
              label: 'A-Levels',
              href: 'https://alevel.wyattau.com/docs/alevel/intro',
            },
            { label: 'GCSE', to: '/docs/qualifications/gcse/intro' },
            { label: 'AP', to: '/docs/qualifications/ap/intro' },
            {
              label: 'Scottish Highers',
              to: '/docs/qualifications/scottish-highers',
            },
            { label: 'Irish LC', to: '/docs/qualifications/ilc/intro' },
            {
              label: 'IB',
              href: 'https://academics.wyattau.com/docs/ib/intro',
            },
            {
              label: 'DSE',
              href: 'https://academics.wyattau.com/docs/dse/intro',
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
