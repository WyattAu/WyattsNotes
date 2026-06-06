// @ts-check
// Docusaurus config for the University sub-site.
// Build: pnpm run build -- --config docusaurus.university.config.ts
// Contains: Mathematics, Physics, Computing, Chemistry, Computer Science, Admissions
// Total: ~115K lines across 7 docs plugins + intro.

import type * as Preset from '@docusaurus/preset-classic';

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

const config = {
  ...sharedConfig({
    title: "Wyatt's Notes — University",
    tagline: 'Mathematics, Physics, Computing, Chemistry, and Computer Science for Undergraduates',
    url: 'https://university.wyattau.com',
    algoliaIndexName: 'wyattsnotes_university',
    socialCard: '/img/social-cards/university.png',
  }),

  // Enable faster build: rspack bundler, SSG worker threads, SWC loader, MDX cross-compiler cache
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    ...sharedPlugins('wyattsnotes-university'),
    // Split docs into separate plugins to avoid webpack "Invalid string length"
    // error (V8 string limit ~512MB). Each plugin gets its own webpack chunk.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university-intro',
        path: 'docs/docs_university',
        routeBasePath: '/docs',
        include: ['intro.md'],
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university-maths',
        path: 'docs/docs_university/mathematics',
        routeBasePath: '/docs/mathematics',
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl:
          'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/mathematics/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university-physics',
        path: 'docs/docs_university/physics',
        routeBasePath: '/docs/physics',
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl:
          'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/physics/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university-computing',
        path: 'docs/docs_university/computing',
        routeBasePath: '/docs/computing',
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl:
          'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/computing/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university-admissions',
        path: 'docs/docs_university/admissions',
        routeBasePath: '/docs/admissions',
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl:
          'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/admissions/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university-chemistry',
        path: 'docs/docs_university/chemistry',
        routeBasePath: '/docs/chemistry',
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl:
          'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/chemistry/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'university-cs',
        path: 'docs/docs_university/computer-science',
        routeBasePath: '/docs/computer-science',
        sidebarPath: require.resolve('./sidebars/sidebar_university.ts'),
        editUrl:
          'https://github.com/WyattAu/WyattsNotes/edit/main/docs/docs_university/computer-science/{dir}',
        ...createCommonDocsPluginConfig(true),
      },
    ],
  ],

  themeConfig: {
    algolia: createAlgoliaConfig('wyattsnotes_university'),
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
        { to: '/docs/intro', label: 'University', position: 'left' },
        {
          href: 'https://academics.wyattau.com',
          label: 'Academics',
          position: 'right',
        },
        {
          href: 'https://alevel.wyattau.com',
          label: 'A-Levels',
          position: 'right',
        },
        {
          href: 'https://qualifications.wyattau.com',
          label: 'Qualifications',
          position: 'right',
        },
        {
          href: 'https://programming.wyattau.com',
          label: 'Programming',
          position: 'right',
        },
        {
          href: 'https://wyattsnotes.wyattau.com',
          label: 'Main Site',
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
          title: 'University Subjects',
          items: [
            { label: 'Mathematics', href: '/docs/mathematics/linear-algebra' },
            { label: 'Physics', href: '/docs/physics/classical-mechanics' },
            { label: 'Computing', href: '/docs/computing/algorithms-and-data-structures' },
            { label: 'Chemistry', href: '/docs/chemistry/physical-chemistry' },
            { label: 'Computer Science', href: '/docs/computer-science/algorithms' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Academics',
              href: 'https://academics.wyattau.com',
            },
            {
              label: 'A-Levels',
              href: 'https://alevel.wyattau.com',
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
              label: 'Main Site',
              href: 'https://wyattsnotes.wyattau.com',
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
