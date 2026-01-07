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
};

const prjMetadataConfig = {
  title: "Wyatt's Notes",
  tagline: 'Discard all that is unnecessary. Beauty is born of clarity.',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://wyattsnotes.wyattau.com',
  baseUrl: '/',
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
    if (errorCode === 'newLineInDisplayMode') {
      return 'ignore';
    }

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
        editUrl: 'https://wyattsnotes.wyattau.com/WyattsNotes/blog_release-notes',
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
        path: 'docs/docs_IB-notes',
        routeBasePath: '/docs/docs_IB-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_IB-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ALevel-notes',
        path: 'docs/docs_ALevel-notes',
        routeBasePath: '/docs/docs_ALevel-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_ALevel-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'DSE-notes',
        path: 'docs/docs_DSE-notes',
        routeBasePath: '/docs/docs_DSE-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_DSE-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cpp-notes',
        path: 'docs/docs_cpp-notes',
        routeBasePath: '/docs/docs_cpp-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_cpp-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dart-notes',
        path: 'docs/docs_dart-notes',
        routeBasePath: '/docs/docs_dart-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_dart-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'java-notes',
        path: 'docs/docs_java-notes',
        routeBasePath: '/docs/docs_java-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_java-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'python-notes',
        path: 'docs/docs_python-notes',
        routeBasePath: '/docs/docs_python-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_python-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'git-notes',
        path: 'docs/docs_git-notes',
        routeBasePath: '/docs/docs_git-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_git-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'general-notes',
        path: 'docs/docs_general-notes',
        routeBasePath: '/docs/docs_general-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_general-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tuning-notes',
        path: 'docs/docs_tuning-notes',
        routeBasePath: '/docs/docs_tuning-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_tuning-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'licensing-notes',
        path: 'docs/docs_licensing-notes',
        routeBasePath: '/docs/docs_licensing-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_licensing-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'truenas-notes',
        path: 'docs/docs_truenas-notes',
        routeBasePath: '/docs/docs_truenas-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_truenas-notes.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ProbabilisticML-notes',
        path: 'docs/docs_ProbabilisticML-notes',
        routeBasePath: '/docs/docs_ProbabilisticML-notes',
        sidebarPath: require.resolve('./sidebars/sidebar_ProbabilisticML-notes.ts'),
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
    [
      'docusaurus-plugin-image-zoom',
      { selector: '.markdown :not(a) > img, .markdown :not(.mermaid) svg' },
    ],
    [
      '@r74tech/docusaurus-plugin-panzoom',
      {
        selector: '.mermaid svg', // Target Mermaid SVGs specifically
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
          title: 'Year 12-13',
          items: [
            {
              label: 'IB ',
              to: '/docs/docs_IB-notes/intro',
            },
            {
              label: 'A Levels ',
              to: '/docs/docs_ALevel-notes/intro',
            },
            {
              label: 'DSE ',
              to: '/docs/docs_DSE-notes/intro',
            },
          ],
        },
        {
          title: 'Dev Tools',
          items: [
            {
              label: 'C++ ',
              to: '/docs/docs_cpp-notes/intro',
            },
            {
              label: 'Dart ',
              to: '/docs/docs_dart-notes/intro',
            },
            {
              label: 'Java ',
              to: '/docs/docs_java-notes/intro',
            },
            {
              label: 'Python ',
              to: '/docs/docs_python-notes/intro',
            },
            {
              label: 'Git ',
              to: '/docs/docs_git-notes/intro',
            },
          ],
        },
        {
          title: 'Operating System',
          items: [
            {
              label: 'TrueNAS',
              to: '/docs/docs_truenas-notes/intro',
            },
          ],
        },
        {
          title: 'others',
          items: [
            {
              label: 'Tuning',
              to: '/docs/docs_tuning-notes/intro',
            },
            {
              label: 'Licensing',
              to: '/docs/docs_licensing-notes/intro',
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
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
