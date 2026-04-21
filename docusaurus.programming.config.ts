// @ts-check
// Docusaurus config for the Programming sub-site.
// Build: pnpm run build -- --config docusaurus.programming.config.ts
// Contains: C++, Java, Python, Rust, Dart
// Total: ~167K lines across 2 docs plugins.

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
  title: "Wyatt's Notes — Programming",
  tagline: 'C++, Java, Python, Rust, Dart',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://programming.wyattau.com',
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
    [require.resolve('./src/plugins/service-worker'), { enable: true }],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cpp-notes',
        path: 'docs/docs_cpp',
        routeBasePath: '/docs/cpp',
        sidebarPath: require.resolve('./sidebars/sidebar_cpp.ts'),
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
        { to: '/docs/cpp/intro', label: 'C++', position: 'left' },
        { to: '/docs/languages/java/intro', label: 'Languages', position: 'left' },
        {
          href: 'https://wyattsnotes.wyattau.com',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://academics.wyattsnotes.wyattau.com',
          label: 'Academics',
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
          title: 'Languages',
          items: [
            { label: 'C++', to: '/docs/cpp/intro' },
            { label: 'Java', to: '/docs/languages/java/intro' },
            { label: 'Python', to: '/docs/languages/python/intro' },
            { label: 'Rust', to: '/docs/languages/rust/intro' },
            { label: 'Dart', to: '/docs/languages/dart/intro' },
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
              href: 'https://academics.wyattsnotes.wyattau.com',
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
      additionalLanguages: ['java', 'dart'],
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
