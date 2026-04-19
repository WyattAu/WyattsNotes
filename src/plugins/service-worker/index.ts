/**
 * Docusaurus plugin that generates a service worker using Workbox.
 *
 * This plugin runs during postBuild and produces a service worker file
 * (sw.js) in the build output directory. The service worker:
 *
 * - Pre-caches all static assets (JS, CSS, HTML, images, fonts)
 * - Uses NetworkFirst strategy for navigation requests (HTML pages)
 * - Uses StaleWhileRevalidate for JS/CSS (updates in background)
 * - Uses CacheFirst for images and fonts
 *
 * Configuration (in docusaurus.config.ts):
 *   plugins: [
 *     ['@site/plugins/service-worker', { enable: true }],
 *   ]
 */

import type { DocusaurusConfig } from '@docusaurus/types';
import type { Plugin } from '@docusaurus/types';
import { generateSW } from 'workbox-build';
import fs from 'fs';
import path from 'path';

interface ServiceWorkerPluginOptions {
  enable?: boolean;
  maximumFileSizeToCacheInBytes?: number;
  cacheId?: string;
}

export default function serviceWorkerPlugin(
  context: DocusaurusConfig,
  options: ServiceWorkerPluginOptions,
): Plugin {
  return {
    name: 'service-worker-plugin',

    async postBuild({ outDir, baseUrl }) {
      if (options.enable === false) return;

      const { count, size } = await generateSW({
        swDest: path.join(outDir, 'sw.js'),
        globDirectory: outDir,
        globPatterns: [
          '**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,ico,woff,woff2,ttf,eot}',
        ],
        skipWaiting: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: options.maximumFileSizeToCacheInBytes || 10 * 1024 * 1024,
        cacheId: options.cacheId || 'wyatts-notes',
        navigateFallback: undefined,
        runtimeCaching: [
          {
            urlPattern: /\.(?:html|htm)/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60,
              },
              networkTimeoutSeconds: 5,
            },
          },
          {
            urlPattern: /\.(?:js|css)/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:woff|woff2|ttf|eot)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 365 * 24 * 60 * 60,
              },
            },
          },
        ],
        // Exclude external tracking endpoints
        globIgnores: ['sw.js', 'workbox-*.js', 'workbox-*.map'],
      });

      // Inject service worker registration into index.html
      const indexPath = path.join(outDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        let indexContent = fs.readFileSync(indexPath, 'utf-8');
        const swRegister = `<script>
if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('${baseUrl}sw.js')})}
</script>`;
        indexContent = indexContent.replace('</head>', `${swRegister}</head>`);
        fs.writeFileSync(indexPath, indexContent, 'utf-8');
      }

      console.log(`Service worker generated: ${count} files, ${size} bytes`);
    },
  };
}
