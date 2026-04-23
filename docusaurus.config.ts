// @ts-check
// Main Docusaurus config for wyattsnotes.wyattau.com.
// Contains: Landing page, Release Notes blog, Infrastructure, Tools
// Total: ~115K lines across 2 docs plugins.

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
    headTags: [
      {
        tagName: 'script',
        attributes: {
          src: 'https://browser.sentry-cdn.com/7.120.1/bundle.tracing.min.js',
          crossorigin: 'anonymous',
          defer: true,
        },
      },
      {
        tagName: 'script',
        innerHTML: `window.__SENTRY_DSN__=${JSON.stringify(process.env.SENTRY_DSN || '')};`,
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
        { to: '/docs/infrastructure/linux/intro', label: 'Infrastructure', position: 'left' },
        { to: '/docs/tools/git/intro', label: 'Tools', position: 'left' },
        {
          href: 'https://academics.wyattau.com',
          label: 'Academics',
          position: 'right',
        },
        {
          href: 'https://university.wyattau.com',
          label: 'University',
          position: 'right',
        },
        {
          href: 'https://programming.wyattau.com',
          label: 'Programming',
          position: 'right',
        },
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
              href: 'https://academics.wyattau.com/docs/ib/intro',
            },
            {
              label: 'DSE',
              href: 'https://academics.wyattau.com/docs/dse/intro',
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
          title: 'Programming',
          items: [
            {
              label: 'C++',
              href: 'https://programming.wyattau.com/docs/cpp/intro',
            },
            {
              label: 'Java',
              href: 'https://programming.wyattau.com/docs/languages/java/intro',
            },
            {
              label: 'Python',
              href: 'https://programming.wyattau.com/docs/languages/python/intro',
            },
            {
              label: 'Rust',
              href: 'https://programming.wyattau.com/docs/languages/rust/intro',
            },
            {
              label: 'Dart',
              href: 'https://programming.wyattau.com/docs/languages/dart/intro',
            },
          ],
        },
        {
          title: 'University',
          items: [
            {
              label: 'Linear Algebra',
              href: 'https://university.wyattau.com/docs/university/mathematics/linear-algebra',
            },
            {
              label: 'Real Analysis',
              href: 'https://university.wyattau.com/docs/university/mathematics/real-analysis',
            },
            {
              label: 'Quantum Mechanics',
              href: 'https://university.wyattau.com/docs/university/physics/quantum-mechanics',
            },
            {
              label: 'Algorithms',
              href: 'https://university.wyattau.com/docs/university/computing/algorithms-and-data-structures',
            },
          ],
        },
        {
          title: 'Infrastructure',
          items: [
            { label: 'Linux', to: '/docs/infrastructure/linux/intro' },
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
            { label: 'Git', to: '/docs/tools/git/intro' },
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
