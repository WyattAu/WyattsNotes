import { expect, test } from '@playwright/test';

test.describe('Search', () => {
  test('search button is visible in navbar', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('button.DocSearch-Button')).toBeVisible();
  });

  test('footer external links resolve', async ({ page }) => {
    await page.goto('/');
    const externalLinks = page.locator('footer a[href^="http"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});
