// @ts-check
// Load .env file for local development (CI/deployment platforms set env vars directly)
import 'dotenv-flow/config';

// Shared configuration blocks for all Docusaurus sub-sites.
// This module eliminates ~2000 lines of duplication across 8 config files.
//
// Usage:
//   import { sharedConfig, createCommonDocsPluginConfig } from './docusaurus.shared.config';
//
//   const config = {
//     ...sharedConfig({ title: 'My Site', url: 'https://example.com', algoliaIndexName: 'my_index' }),
//     plugins: [
//       ...sharedPlugins(),
//       ['@docusaurus/plugin-content-docs', { ...createCommonDocsPluginConfig(), ... }],
//     ],
//   };

import remarkGridTable from '@adobe/remark-gridtables';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkCodeSnippets from 'remark-code-snippets';
import remarkMath from 'remark-math';

// ---------------------------------------------------------------------------
// Admonition keywords (identical across all configs)
// ---------------------------------------------------------------------------
export const admonitionsConfig = {
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

// ---------------------------------------------------------------------------
// Remark / Rehype plugin configuration
// ---------------------------------------------------------------------------
export const katexIgnoreNewLineWarning = {
  strict: (errorCode: string) => {
    if (errorCode === 'newLineInDisplayMode') {
      return 'ignore';
    }

    return 'warn';
  },
};

export const rehypePluginConfig = {
  rehypePlugins: [[rehypeKatex, katexIgnoreNewLineWarning]],
};

/**
 * Create remark plugin config.
 * @param useEscapeJsxBraces - Whether to include the escape-jsx-braces remark plugin.
 *   Used by: ib, dse, alevel-maths-physics, alevel-sciences, university (via generated config).
 *   NOT used by: main, programming, qualifications.
 */
export function createRemarkPluginsConfig(useEscapeJsxBraces = false) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const escapeJsxBraces = require('./src/plugins/escape-jsx-braces/index.js');

  return {
    beforeDefaultRemarkPlugins: [remarkGridTable],
    // remarkMath MUST run before escape-jsx-braces so that math/inlineMath
    // nodes exist in the AST when the brace-escaping plugin processes them.
    // The plugin restores diamond placeholders in math node values before KaTeX.
    remarkPlugins: useEscapeJsxBraces
      ? [remarkMath, escapeJsxBraces, remarkCodeSnippets]
      : [remarkMath, remarkCodeSnippets],
  };
}

/**
 * Create the common docs plugin config spread object.
 * @param useEscapeJsxBraces - Whether to include escape-jsx-braces in remark plugins.
 */
export function createCommonDocsPluginConfig(useEscapeJsxBraces = false) {
  return {
    showLastUpdateTime: true,
    showLastUpdateAuthor: true,
    ...admonitionsConfig,
    ...createRemarkPluginsConfig(useEscapeJsxBraces),
    ...rehypePluginConfig,
  };
}

// ---------------------------------------------------------------------------
// Head tags (DNS prefetch, Sentry, print CSS) — identical across all configs
// ---------------------------------------------------------------------------
export const sharedHeadTags: Config['headTags'] = [
  // Google Search Console: https://search.google.com/search-console
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? [
        {
          tagName: 'meta' as const,
          attributes: {
            name: 'google-site-verification',
            content: process.env.GOOGLE_SITE_VERIFICATION,
          },
        },
      ]
    : []),
  // Bing Webmaster Tools: https://www.bing.com/webmasters
  ...(process.env.BING_SITE_VERIFICATION
    ? [
        {
          tagName: 'meta' as const,
          attributes: { name: 'msvalidate.01', content: process.env.BING_SITE_VERIFICATION },
        },
      ]
    : []),
  // Web App Manifest (PWA)
  {
    tagName: 'link',
    attributes: { rel: 'manifest', href: '/manifest.json' },
  },
  // Apple touch icon for iOS PWA
  {
    tagName: 'link',
    attributes: { rel: 'apple-touch-icon', href: '/img/WyattsNotes/WyattsNotesLogo.png' },
  },
  // Open Graph / Social Card (og:image and twitter:image set per-site in sharedConfig)
  {
    tagName: 'meta',
    attributes: { property: 'og:type', content: 'website' },
  },
  {
    tagName: 'meta',
    attributes: { name: 'twitter:card', content: 'summary_large_image' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'dns-prefetch', href: 'https://algolia.net' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'preconnect', href: 'https://algolia.net' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'dns-prefetch', href: 'https://www.desmos.com' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'preconnect', href: 'https://www.desmos.com' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'dns-prefetch', href: 'https://www.geogebra.org' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'preconnect', href: 'https://www.geogebra.org' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'dns-prefetch', href: 'https://phet.colorado.edu' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'preconnect', href: 'https://phet.colorado.edu' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'dns-prefetch', href: 'https://browser.sentry-cdn.com' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'preconnect', href: 'https://browser.sentry-cdn.com' },
  },
  // Cloudflare Web Analytics (privacy-respecting, no cookies)
  {
    tagName: 'link',
    attributes: { rel: 'dns-prefetch', href: 'https://static.cloudflareinsights.com' },
  },
  {
    tagName: 'link',
    attributes: { rel: 'preconnect', href: 'https://static.cloudflareinsights.com' },
  },
  {
    tagName: 'script',
    attributes: {
      src: 'https://browser.sentry-cdn.com/7.120.1/bundle.tracing.min.js',
      integrity: 'sha384-p/qUnBxOD4NW6dE7MXc4bbBkfBXxGhsoxBKcy/CTyCbvKXdhMSp/f8lwhX63trxX',
      crossorigin: 'anonymous',
      defer: 'defer',
    },
  },
  {
    tagName: 'script',
    attributes: { defer: 'defer' },
    innerHTML: `window.__SENTRY_DSN__=${JSON.stringify(process.env.SENTRY_DSN || '')};`,
  },
  // Cloudflare Web Analytics beacon (privacy-respecting, no cookies, no fingerprinting)
  ...(process.env.CLOUDFLARE_ANALYTICS_TOKEN
    ? [
        {
          tagName: 'script' as const,
          attributes: {
            defer: 'defer',
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': JSON.stringify({ token: process.env.CLOUDFLARE_ANALYTICS_TOKEN }),
          },
        },
      ]
    : []),
  // Build ID for service worker cache versioning
  {
    tagName: 'script' as const,
    attributes: {},
    innerHTML: `window.__BUILD_ID__=${JSON.stringify(Date.now())};`,
  },
  {
    tagName: 'link',
    attributes: { rel: 'stylesheet', href: '/css/print.css', media: 'print' },
  },
  // Async font preloading (render-blocking fonts loaded asynchronously)
  {
    tagName: 'link',
    attributes: {
      rel: 'preload',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5/400.css',
      as: 'style',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'preload',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5/700.css',
      as: 'style',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'preload',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/400.css',
      as: 'style',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'preload',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/700.css',
      as: 'style',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'preload',
      href: 'https://cdn.jsdelivr.net/npm/@fontsource/merriweather@5/400-italic.css',
      as: 'style',
    },
  },
  // Async CSS loader: swap preload to stylesheet on load
  {
    tagName: 'script',
    attributes: { defer: 'defer' },
    innerHTML: `(function(){var c=document.querySelectorAll('link[rel="preload"][as="style"]');c.forEach(function(l){l.onload=function(){this.onload=null;this.rel='stylesheet'}})})()`,
  },
  {
    tagName: 'noscript',
    innerHTML: [
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/400.css">',
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/700.css">',
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/400.css">',
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/700.css">',
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/merriweather@5/400-italic.css">',
    ].join(''),
  },
];

// ---------------------------------------------------------------------------
// Shared config fields (identical across all configs)
// ---------------------------------------------------------------------------
export const sharedI18n = {
  defaultLocale: 'en',
  locales: ['en'],
};

export const sharedCompilationConfig = {
  staticDirectories: ['static'],
};

export const sharedClientModules = [require.resolve('./src/theme/KatexLoader/index.tsx')];

export const sharedMarkdownConfig = {
  mermaid: true,
};

export const sharedPresets: Config['presets'] = [
  [
    'classic',
    {
      docs: false,
      blog: false,
      theme: { customCss: './src/css/custom.css' },
      sitemap: {
        lastmod: 'date',
        changefreq: 'weekly',
        priority: 0.7,
        ignorePatterns: ['/tags/**'],
      },
    } satisfies Preset.Options,
  ],
];

// ---------------------------------------------------------------------------
// Shared plugins (used by all sub-sites)
// ---------------------------------------------------------------------------
export function sharedPlugins(cacheId?: string) {
  return [
    require.resolve('./src/plugins/fix-mermaid-elk'),
    [require.resolve('./src/plugins/service-worker'), { enable: true, cacheId }],
    ['docusaurus-plugin-image-zoom', { selector: '.markdown :not(a) > img' }],
    ['@r74tech/docusaurus-plugin-panzoom', { selector: '.mermaid svg' }],
  ];
}

// ---------------------------------------------------------------------------
// Shared theme config blocks
// ---------------------------------------------------------------------------
export const sharedThemeConfigMetadata = [
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
];

export const sharedColorMode = {
  defaultMode: 'dark' as const,
  disableSwitch: false,
  respectPrefersColorScheme: false,
};

export const sharedPrism = {
  theme: { ...prismThemes.gruvboxMaterialLight },
  darkTheme: { ...prismThemes.gruvboxMaterialDark },
  additionalLanguages: ['java', 'dart'],
};

export const sharedMermaid = {
  theme: { light: 'neutral', dark: 'dark' },
};

export const sharedZoom = {
  selector: '.markdown :not(a) > img',
  background: { light: 'rgb(255, 255, 255)', dark: 'rgb(50, 50, 50)' },
};

// ---------------------------------------------------------------------------
// Algolia configuration
// ---------------------------------------------------------------------------
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID || '[YOUR_APP_ID]';
const ALGOLIA_SEARCH_KEY = process.env.ALGOLIA_SEARCH_KEY || '[YOUR_SEARCH_KEY]';

export function createAlgoliaConfig(indexName: string) {
  return {
    appId: ALGOLIA_APP_ID,
    apiKey: ALGOLIA_SEARCH_KEY,
    indexName,
    contextualSearch: false,
  };
}

// ---------------------------------------------------------------------------
// Shared config factory
// ---------------------------------------------------------------------------
export interface SharedConfigOptions {
  title: string;
  tagline: string;
  url: string;
  baseUrl?: string;
  algoliaIndexName: string;
  /** Social card image path (e.g. '/img/social-cards/ib.png'). Defaults to generic card. */
  socialCard?: string;
}

/**
 * Returns the common config fields shared by all sub-sites.
 * Site-specific fields (title, tagline, url) are parameterized.
 * Note: themeConfig is NOT included — each site defines its own navbar/footer.
 * Use the individual exports (sharedPrism, sharedMermaid, etc.) for themeConfig.
 */
export function sharedConfig(options: SharedConfigOptions) {
  return {
    title: options.title,
    tagline: options.tagline,
    favicon: 'img/WyattsNotes/WyattsNotesLogo.ico',
    url: options.url,
    baseUrl: options.baseUrl ?? '/',
    organizationName: 'WyattAu',
    projectName: 'WyattsNotes',
    trailingSlash: false,
    clientModules: sharedClientModules,
    onBrokenLinks: 'throw',
    ...sharedCompilationConfig,
    headTags: [
      ...sharedHeadTags,
      // Per-site social card images
      {
        tagName: 'meta',
        attributes: {
          property: 'og:image',
          content: options.socialCard || '/img/WyattsNotes/WyattsNotesSocialCard.png',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'twitter:image',
          content: options.socialCard || '/img/WyattsNotes/WyattsNotesSocialCard.png',
        },
      },
    ],
    i18n: sharedI18n,
    presets: sharedPresets,
    markdown: sharedMarkdownConfig,
    themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  };
}
