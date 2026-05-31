import { expect, test } from '@playwright/test';

const DEPLOYED_URL = process.env.E2E_DEPLOYED_URL || 'https://wyattsnotes.wyattau.com';

test.describe('Service Worker Offline Behavior', () => {
  test.skip(!process.env.E2E_TEST_SW, 'Skipped: set E2E_TEST_SW=1 to run');

  test.beforeEach(async ({ context, page }) => {
    await context.addInitScript(() => {
      // Ensure caches API is available (no-op in supporting browsers)
      void window.caches;
    });
    await page.goto(DEPLOYED_URL);
    await page.waitForLoadState('networkidle');
  });

  test('service worker is registered and controlling the page', async ({ page }) => {
    const swUrl = await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.getRegistration();

      return registration?.active?.scriptURL ?? null;
    });

    expect(swUrl).not.toBeNull();
    expect(swUrl).toMatch(/sw-\d+\.js$/);

    const controller = await page.evaluate(() => {
      return navigator.serviceWorker.controller?.scriptURL ?? null;
    });

    expect(controller).toBe(swUrl);
  });

  test('offline.html fallback page is cached and accessible', async ({ page }) => {
    const cacheNames = await page.evaluate(async () => {
      const keys = await caches.keys();

      return keys;
    });

    const precacheName = cacheNames.find((name: string) => name.startsWith('workbox-precache'));

    expect(precacheName).toBeDefined();

    const hasOfflineEntry = await page.evaluate(
      async ({ cacheName, baseUrl }: { cacheName: string; baseUrl: string }) => {
        const cache = await caches.open(cacheName);
        const match = await cache.match(`${baseUrl}offline.html`);

        return match !== undefined;
      },
      { cacheName: precacheName, baseUrl: DEPLOYED_URL },
    );

    expect(hasOfflineEntry).toBe(true);
  });

  test('navigating offline serves the fallback page', async ({ context, page }) => {
    await context.setOffline(true);

    await page.goto(DEPLOYED_URL);
    await page.waitForLoadState('networkidle');

    const title = await page.title();

    expect(title).toBeTruthy();
  });

  test('precache cache contains static assets', async ({ page }) => {
    const entryCount = await page.evaluate(async () => {
      const keys = await caches.keys();
      const precache = keys.find((k: string) => k.startsWith('workbox-precache'));

      if (!precache) {
        return 0;
      }
      const cache = await caches.open(precache);

      return (await cache.keys()).length;
    });

    expect(entryCount).toBeGreaterThan(0);
  });
});
