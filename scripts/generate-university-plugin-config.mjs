#!/usr/bin/env node
/**
 * Generate a per-subject Docusaurus config for parallel university builds.
 *
 * Usage:
 *   node scripts/generate-university-plugin-config.mjs <subject> <docs_path> [include-intro]
 *
 * Example:
 *   node scripts/generate-university-plugin-config.mjs maths docs/docs_university/mathematics intro
 *   node scripts/generate-university-plugin-config.mjs physics docs/docs_university/physics
 */

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Resolve paths relative to project root (CWD)
const projectRoot = process.cwd();

const [, , subject, docsPath, includeIntro] = process.argv;

if (!subject || !docsPath) {
  console.error('Usage: node scripts/generate-university-plugin-config.mjs <subject> <docs_path> [include-intro]');
  process.exit(1);
}

const routeBase = subject === 'maths' ? '/docs/mathematics'
  : subject === 'physics' ? '/docs/physics'
  : subject === 'computing' ? '/docs/computing'
  : '/docs/admissions';

const pluginId = `university-${subject}`;
const outFile = path.resolve('docusaurus-university-' + subject + '.config.ts');

const config = `// Auto-generated config for ${subject} parallel build
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

const plugins: any[] = [
  ...sharedPlugins('wyattsnotes-university'),
  ['@docusaurus/plugin-content-docs', {
    id: '${pluginId}',
    path: '${docsPath}',
    routeBasePath: '${routeBase}',
    sidebarPath: require.resolve(path.join(projectRoot, 'sidebars/sidebar_university.ts')),
    editUrl: 'https://github.com/WyattAu/WyattsNotes/edit/main/${docsPath}/{dir}',
    ...createCommonDocsPluginConfig(true),
  }],
${includeIntro ? `  // Include intro plugin in maths build (it's tiny)
  ['@docusaurus/plugin-content-docs', {
    id: 'university-intro',
    path: 'docs/docs_university',
    routeBasePath: '/docs',
    include: ['intro.md'],
    sidebarPath: require.resolve(path.join(projectRoot, 'sidebars/sidebar_university.ts')),
    editUrl: 'https://github.com/WyattAu/WyattAu/WyattsNotes/edit/main/docs/docs_university/{dir}',
    ...createCommonDocsPluginConfig(true),
  }],
` : ''}];

const config = {
  ...sharedConfig({
    title: "Wyatt's Notes — University",
    tagline: 'Mathematics, Physics, and Computing for Undergraduates',
    url: 'https://university.wyattau.com',
    algoliaIndexName: 'wyattsnotes_university',
    socialCard: '/img/social-cards/university.png',
  }),
  future: {
    faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },
  plugins,
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
        { href: 'https://academics.wyattau.com', label: 'Academics', position: 'right' },
        { href: 'https://alevel.wyattau.com', label: 'A-Levels', position: 'right' },
        { href: 'https://qualifications.wyattau.com', label: 'Qualifications', position: 'right' },
        { href: 'https://programming.wyattau.com', label: 'Programming', position: 'right' },
        { href: 'https://wyattsnotes.wyattau.com', label: 'Main Site', position: 'right' },
        { href: 'https://github.com/WyattAu/WyattsNotes', label: 'GitHub', position: 'right' },
      ],
    },
    colorMode: sharedColorMode,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'University Subjects',
          items: [
            { label: 'Mathematics', to: '/docs/mathematics/linear-algebra' },
            { label: 'Physics', to: '/docs/physics/classical-mechanics' },
            { label: 'Computing', to: '/docs/computing/algorithms-and-data-structures' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Academics', href: 'https://academics.wyattau.com' },
            { label: 'A-Levels', href: 'https://alevel.wyattau.com' },
            { label: 'Qualifications', href: 'https://qualifications.wyattau.com' },
            { label: 'Programming', href: 'https://programming.wyattau.com' },
            { label: 'Main Site', href: 'https://wyattsnotes.wyattau.com' },
            { label: 'GitHub', href: 'https://github.com/WyattAu/WyattsNotes' },
            { label: 'Donate', href: 'https://gravatar.com/wyattau' },
          ],
        },
      ],
      copyright: \`\\u00A9 \${new Date().getFullYear()} Wyatt Au. Content is licensed under <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">AGPLv3</a>.\`,
    },
    prism: sharedPrism,
    mermaid: sharedMermaid,
    zoom: sharedZoom,
  },
} satisfies Preset.ThemeConfig;

export default config;
`;

fs.writeFileSync(outFile, config);
console.error(`Generated ${outFile}`);
