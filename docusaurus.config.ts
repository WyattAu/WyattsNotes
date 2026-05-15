// @ts-check
// Main Docusaurus config for wyattsnotes.wyattau.com.
// Contains: Landing page, Release Notes blog, Infrastructure, Tools
// Total: ~115K lines across 2 docs plugins.

import type * as Preset from '@docusaurus/preset-classic';

import {
  createAlgoliaConfig,
  createCommonDocsPluginConfig,
  sharedClientModules,
  sharedColorMode,
  sharedCompilationConfig,
  sharedHeadTags,
  sharedI18n,
  sharedMarkdownConfig,
  sharedMermaid,
  sharedPresets,
  sharedPrism,
  sharedThemeConfigMetadata,
  sharedZoom,
} from './docusaurus.shared.config';

const commonDocsPluginConfig = createCommonDocsPluginConfig(true);

const config = {
  title: "Wyatt's Notes",
  tagline: 'Discard all that is unnecessary. Beauty is born of clarity.',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://wyattsnotes.wyattau.com',
  baseUrl: '/',
  organizationName: 'WyattAu',
  projectName: 'WyattsNotes',
  trailingSlash: false,

  clientModules: sharedClientModules,
  onBrokenLinks: 'warn',
  ...sharedCompilationConfig,

  headTags: sharedHeadTags,
  i18n: sharedI18n,

  presets: sharedPresets,

  plugins: [
    [require.resolve('./src/plugins/service-worker'), { enable: true }],
    require.resolve('./src/plugins/fix-mermaid-elk'),
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
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/{dir}',
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
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/{dir}',
        ...commonDocsPluginConfig,
      },
    ],
    ['docusaurus-plugin-image-zoom', { selector: '.markdown :not(a) > img' }],
    ['@r74tech/docusaurus-plugin-panzoom', { selector: '.mermaid svg' }],
  ],

  markdown: sharedMarkdownConfig,

  themes: [
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-redoc',
  ],

  themeConfig: {
    algolia: createAlgoliaConfig('wyattsnotes_main'),
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
        { to: '/blog_release-notes', label: 'Release Notes', position: 'left' },
        { to: '/docs/infrastructure/linux/intro', label: 'Infrastructure', position: 'left' },
        { to: '/docs/tools/git/intro', label: 'Tools', position: 'left' },
        { href: 'https://academics.wyattau.com', label: 'Academics', position: 'right' },
        { href: 'https://university.wyattau.com', label: 'University', position: 'right' },
        { href: 'https://programming.wyattau.com', label: 'Programming', position: 'right' },
        { type: 'search', position: 'right' },
        { href: 'https://github.com/WyattAu/WyattsNotes', label: 'GitHub', position: 'right' },
      ],
    },
    colorMode: sharedColorMode,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Academics',
          items: [
            { label: 'IB', href: 'https://ib.wyattau.com/docs/ib/intro' },
            { label: 'DSE', href: 'https://dse.wyattau.com/docs/dse/intro' },
            { label: 'A-Levels', href: 'https://alevel.wyattau.com/docs/alevel/intro' },
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
            { label: 'C++', href: 'https://programming.wyattau.com/docs/cpp/intro' },
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
              href: 'https://university.wyattau.com/docs/mathematics/linear-algebra',
            },
            {
              label: 'Real Analysis',
              href: 'https://university.wyattau.com/docs/mathematics/real-analysis',
            },
            {
              label: 'Quantum Mechanics',
              href: 'https://university.wyattau.com/docs/physics/quantum-mechanics',
            },
            {
              label: 'Algorithms',
              href: 'https://university.wyattau.com/docs/computing/algorithms-and-data-structures',
            },
          ],
        },
        {
          title: 'Infrastructure',
          items: [
            { label: 'Linux', to: '/docs/infrastructure/linux/intro' },
            { label: 'Networking', to: '/docs/infrastructure/networking/intro' },
            { label: 'Databases', to: '/docs/infrastructure/databases/intro' },
            { label: 'Security', to: '/docs/infrastructure/security/intro' },
            { label: 'TrueNAS', to: '/docs/infrastructure/truenas/intro' },
            { label: 'Tuning', to: '/docs/infrastructure/tuning/intro' },
          ],
        },
        {
          title: 'Tools',
          items: [
            { label: 'Git', to: '/docs/tools/git/intro' },
            { label: 'Algorithms', to: '/docs/tools/algorithms/intro' },
            { label: 'Probabilistic ML', to: '/docs/tools/probabilisticml/intro' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Release Notes', to: '/blog_release-notes' },
            { label: 'GitHub', href: 'https://github.com/WyattAu/WyattsNotes' },
            { label: 'Donate', href: 'https://gravatar.com/wyattau' },
            { label: 'Privacy', to: '/privacy' },
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
