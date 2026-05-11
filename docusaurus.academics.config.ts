// @ts-check
// Docusaurus config for the Academics redirect.
// Build: npx docusaurus build --config docusaurus.academics.config.ts
// Redirects to ib.wyattau.com

import type { Config } from '@docusaurus/types';

const config: Config = {
  title: "Wyatt's Notes — Academics",
  tagline: 'Redirecting to ib.wyattau.com...',
  favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
  url: 'https://academics.wyattau.com',
  baseUrl: '/',
  organizationName: 'WyattAu',
  projectName: 'WyattsNotes',
  trailingSlash: false,

  staticDirectories: ['static'],

  plugins: [require.resolve('./src/plugins/fix-mermaid-elk')],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'refresh',
        content: '0;url=https://ib.wyattau.com',
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
