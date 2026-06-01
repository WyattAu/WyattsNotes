/**
 * Docusaurus plugin that generates a service worker using Workbox generateSW.
 *
 * Caching strategy:
 * - Precache (CacheFirst): All JS, CSS, images, fonts from the build output.
 *   These are downloaded during service worker install and served from cache
 *   immediately. External resources are excluded since only build output files
 *   are scanned.
 * - NetworkFirst: HTML navigation requests. Tries network with a 5s timeout,
 *   falls back to cache. Pages are cached on first visit and available offline
 *   thereafter.
 *
 * Configuration (in docusaurus.config.ts):
 *   plugins: [
 *     [require.resolve('./src/plugins/service-worker'), { enable: true }],
 *   ]
 */

import type { DocusaurusConfig, Plugin } from '@docusaurus/types';

import fs from 'fs';
import path from 'path';
import { generateSW } from 'workbox-build';

interface ServiceWorkerPluginOptions {
  enable?: boolean;
  cacheId?: string;
  buildId?: string;
}

export default function serviceWorkerPlugin(
  context: DocusaurusConfig,
  options: ServiceWorkerPluginOptions,
): Plugin {
  return {
    name: 'service-worker-plugin',

    async postBuild({ outDir, baseUrl }) {
      if (options.enable === false) {
        return;
      }

      const cacheId = options.cacheId || 'wyattsnotes';
      const buildId = options.buildId || String(Date.now());

      const swFilename = `sw-${buildId}.js`;

      const { count, size } = await generateSW({
        swDest: path.join(outDir, swFilename),
        globDirectory: outDir,
        globPatterns: ['**/*.{js,css,woff2,woff,ttf,eot,png,jpg,jpeg,gif,webp,svg,ico,html}'],
        globIgnores: [swFilename, `${swFilename}.map`],
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        cacheId,
        dontCacheBustURLsMatching: /\.[a-f0-9]{8}\./i,
        navigateFallback: `${baseUrl}offline.html`,
        navigateFallbackAllowlist: [/^\/(?!assets\/|img\/|sw-.+\.js).*/],
        runtimeCaching: [
          {
            urlPattern: ({ sameOrigin, request }) => sameOrigin && request.mode === 'navigate',
            handler: 'NetworkFirst' as const,
            options: {
              cacheName: `${cacheId}-html-${buildId}`,
              networkTimeoutSeconds: 5,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      });

      const indexPath = path.join(outDir, 'index.html');

      if (fs.existsSync(indexPath)) {
        let indexContent = fs.readFileSync(indexPath, 'utf-8');
        const swRegister = `<script defer>
if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('${baseUrl}${swFilename}')})}
</script>`;

        indexContent = indexContent.replace('</head>', `${swRegister}</head>`);
        fs.writeFileSync(indexPath, indexContent, 'utf-8');
      }

      console.log(
        `Service worker generated using Workbox generateSW: ${count} files precached (${(size / 1024 / 1024).toFixed(1)} MB).`,
      );
      console.log(
        'Strategy: Precache (CacheFirst) for JS/CSS/images/fonts, NetworkFirst for HTML navigation.',
      );
    },
  };
}
