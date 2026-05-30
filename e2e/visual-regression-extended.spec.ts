import { expect, test } from '@playwright/test';

test.describe('Visual Regression - Extended', () => {
  test('dark mode rendering matches snapshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const toggle = page.locator('button[class*="color"], [class*="theme-toggle"], .navbar__color-mode');
    if (await toggle.isVisible()) {
      await toggle.click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page).toHaveScreenshot('dark-mode-landing.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('404 page matches snapshot', async ({ page }) => {
    await page.goto('/nonexistent-page');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('404-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('mobile responsive rendering matches snapshot', async ({ page, browserName }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot(`mobile-landing-${browserName}.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
});
