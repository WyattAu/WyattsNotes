// @ts-check

import remarkGridTable from '@adobe/remark-gridtables';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkCodeSnippets from 'remark-code-snippets';
import remarkMath from 'remark-math';

const compilationConfig = {
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
};

const prjMetadataConfig = {
  title: "Wyatt's Notes",
  tagline: 'Notes ordered by syllabus',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://wyattau.github.io',
  baseUrl: '/WyattsNotes/',

  organizationName: 'Wyatt',
  projectName: 'WyattsNotes',
  trailingSlash: false,
};

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
    if (errorCode === 'newLineInDisplayMode') return 'ignore';
    return 'warn'; // Maintain default for other errors
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
  ...prjMetadataConfig,
  ...compilationConfig,

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
      '@docusaurus/plugin-content-blog',
      {
        blogTitle: 'Release Notes',
        path: 'blog_release-notes',
        routeBasePath: '/blog_release-notes',
        blogSidebarCount: 10,
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        editUrl: 'https://wyattau.github.io/WyattsNotes/blog_release-notes',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'IB-notes',
        path: 'docs_IB-notes',
        routeBasePath: '/docs_IB-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_IB-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ALevel-notes',
        path: 'docs_ALevel-notes',
        routeBasePath: '/docs_ALevel-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_ALevel-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'DSE-notes',
        path: 'docs_DSE-notes',
        routeBasePath: '/docs_DSE-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_DSE-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general-notes',
        path: 'docs_general-notes',
        routeBasePath: '/docs_general-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_general-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      'docusaurus-lunr-search', // Wont work in dev mode, need to build
      {
        indexDocs: true,
        indexBlog: true,
        languages: ['en'],
      },
    ],
    ['docusaurus-plugin-image-zoom', { selector: '.markdown :not(a) > img' }],
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
    image: 'img/WyattNotes/WyattsNotesSocialCard.png',
    navbar: {
      title: "Wyatt's Notes",
      logo: {
        alt: 'My Site Logo',
        src: 'img/WyattsNotes/WyattsNotesLogo.svg',
        srcDark: 'img/WyattsNotes/WyattsNotesLogo.svg',
      },
      items: [
        { to: '/blog_release-notes', label: 'Release Notes', position: 'left' },
        {
          type: 'search',
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
          title: 'Notes',
          items: [
            {
              label: 'General Notes',
              to: '/docs_general-notes/intro',
            },
            {
              label: 'IB Notes',
              to: '/docs_IB-notes/intro',
            },
            {
              label: 'A Levels Notes',
              to: '/docs_ALevel-notes/intro',
            },
            {
              label: 'DSE Notes',
              to: '/docs_DSE-notes/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Release Notes',
              to: '/blog_release-notes',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WyattAu/WyattsNotes',
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
      additionalLanguages: ['java'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
