// @ts-check
// Docusaurus config for the A-Level redirect.
// Build: npx docusaurus build --config docusaurus.alevel.config.ts
// Redirects to alevel-maths-physics.wyattau.com

import type { Config } from '@docusaurus/types';

const config: Config = {
  title: "Wyatt's Notes — A-Levels",
  tagline: 'Redirecting to alevel-maths-physics.wyattau.com...',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://alevel.wyattau.com',
  baseUrl: '/',
  organizationName: 'WyattAu',
  projectName: 'WyattsNotes',
  trailingSlash: false,

  staticDirectories: ['static'],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'refresh',
        content: '0;url=https://alevel-maths-physics.wyattau.com',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
