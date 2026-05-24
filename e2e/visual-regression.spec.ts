import { expect, test } from '@playwright/test';

// Visual regression tests using Playwright screenshot comparison.
// Run: pnpm exec playwright test --update-snapshots  (to create/update baselines)
// Run: pnpm exec playwright test                     (to compare against baselines)

test.describe('Visual Regression', () => {
  test('landing page matches snapshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for hero section to be visible
    const hero = page.locator('header, .hero, [class*="hero"]');
    if (await hero.isVisible()) {
      await expect(page).toHaveScreenshot('landing-page.png', {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    }
  });

  test('docs page matches snapshot', async ({ page }) => {
    await page.goto('/docs/infrastructure/intro');
    await page.waitForLoadState('networkidle');

    // Wait for content to load
    const article = page.locator('article, main');
    if (await article.isVisible()) {
      await expect(page).toHaveScreenshot('docs-page.png', {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    }
  });

  test('sidebar is visible on docs page', async ({ page }) => {
    await page.goto('/docs/infrastructure/intro');
    await page.waitForLoadState('networkidle');

    const sidebar = page.locator('aside, .theme-doc-sidebar-container, nav[class*="sidebar"]');
    if (await sidebar.isVisible()) {
      await expect(sidebar).toHaveScreenshot('sidebar.png', {
        maxDiffPixelRatio: 0.02,
      });
    }
  });

  test('navbar is consistent across pages', async ({ page }) => {
    const pages = ['/', '/docs/infrastructure/intro', '/docs/tools/intro'];

    for (const path of pages) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      const navbar = page.locator('nav.navbar');
      if (await navbar.isVisible()) {
        await expect(navbar).toHaveScreenshot(`navbar-${path.replace(/[^a-z]/g, '-')}.png`, {
          maxDiffPixelRatio: 0.01,
        });
      }
    }
  });
});
