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

  onBrokenLinks: 'throw',

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
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/blog_release-notes',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'academics-notes',
        path: 'docs/docs_academics',
        routeBasePath: '/docs/academics',
        sidebarPath: require.resolve('./sidebars/sidebar_academics.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'programming-notes',
        path: 'docs/docs_programming',
        routeBasePath: '/docs/programming',
        sidebarPath: require.resolve('./sidebars/sidebar_programming.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'infrastructure-notes',
        path: 'docs/docs_infrastructure',
        routeBasePath: '/docs/infrastructure',
        sidebarPath: require.resolve('./sidebars/sidebar_infrastructure.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tools-notes',
        path: 'docs/docs_tools',
        routeBasePath: '/docs/tools',
        sidebarPath: require.resolve('./sidebars/sidebar_tools.ts'),
        ...commonDocsPluginConfig,
      },
    ],
    [
      'docusaurus-lunr-search',
      {
        indexDocs: true,
        indexBlog: true,
        languages: ['en'],
      },
    ],
    ['docusaurus-plugin-image-zoom', { selector: '.markdown :not(a) > img' }],
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
        alt: "Wyatt's Notes",
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
          title: 'Academics',
          items: [
            {
              label: 'IB',
              to: '/docs/academics/ib/intro',
            },
            {
              label: 'A-Levels',
              to: '/docs/academics/alevel/intro',
            },
            {
              label: 'DSE',
              to: '/docs/academics/dse/intro',
            },
          ],
        },
        {
          title: 'Programming',
          items: [
            {
              label: 'C++',
              to: '/docs/programming/cpp/intro',
            },
            {
              label: 'Dart',
              to: '/docs/programming/dart/intro',
            },
            {
              label: 'Java',
              to: '/docs/programming/java/intro',
            },
            {
              label: 'Python',
              to: '/docs/programming/python/intro',
            },
            {
              label: 'Rust',
              to: '/docs/programming/rust/intro',
            },
          ],
        },
        {
          title: 'Infrastructure',
          items: [
            {
              label: 'Linux',
              to: '/docs/infrastructure/linux/intro',
            },
            {
              label: 'Networking',
              to: '/docs/infrastructure/networking/intro',
            },
            {
              label: 'Databases',
              to: '/docs/infrastructure/databases/intro',
            },
            {
              label: 'Security',
              to: '/docs/infrastructure/security/intro',
            },
            {
              label: 'TrueNAS',
              to: '/docs/infrastructure/truenas/intro',
            },
            {
              label: 'Tuning',
              to: '/docs/infrastructure/tuning/intro',
            },
          ],
        },
        {
          title: 'Tools',
          items: [
            {
              label: 'Git',
              to: '/docs/tools/git/intro',
            },
            {
              label: 'Algorithms',
              to: '/docs/tools/algorithms/intro',
            },
            {
              label: 'Probabilistic ML',
              to: '/docs/tools/probabilisticml/intro',
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
            {
              label: 'Privacy',
              to: '/privacy',
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
