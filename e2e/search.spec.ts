import { expect, test } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('search modal opens on main site', async ({ page }) => {
    await page.goto('/');
    const searchButton = page.locator('button.DocSearch-Button');
    await expect(searchButton).toBeVisible({ timeout: 10000 });
    await searchButton.click();

    const modal = page.locator('.DocSearch-Modal');
    await expect(modal).toBeVisible();
  });

  test('search modal opens with keyboard shortcut', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Ctrl+K opens search
    await page.keyboard.press('Control+k');

    const modal = page.locator('.DocSearch-Modal');
    await expect(modal).toBeVisible();
  });

  test('search input accepts query', async ({ page }) => {
    await page.goto('/');
    const searchButton = page.locator('button.DocSearch-Button');
    await expect(searchButton).toBeVisible({ timeout: 10000 });
    await searchButton.click();

    const input = page.locator('.DocSearch-Input');
    await expect(input).toBeVisible();
    await input.fill('physics');
    // Input should contain the query
    await expect(input).toHaveValue('physics');
  });

  test('search modal closes on Escape', async ({ page }) => {
    await page.goto('/');
    const searchButton = page.locator('button.DocSearch-Button');
    await expect(searchButton).toBeVisible({ timeout: 10000 });
    await searchButton.click();

    const modal = page.locator('.DocSearch-Modal');
    await expect(modal).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();
  });
});
