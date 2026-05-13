import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('landing page loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Wyatt's Notes/);
  });

  test('navbar contains expected links', async ({ page }) => {
    await page.goto('/');
    const navbar = page.locator('nav.navbar');
    await expect(navbar).toBeVisible();
    await expect(navbar.getByText('Release Notes')).toBeVisible();
    await expect(navbar.getByText('Infrastructure')).toBeVisible();
    await expect(navbar.getByText('Tools')).toBeVisible();
    await expect(navbar.getByText('Academics')).toBeVisible();
    await expect(navbar.getByText('University')).toBeVisible();
    await expect(navbar.getByText('Programming')).toBeVisible();
    await expect(navbar.getByText('GitHub')).toBeVisible();
  });

  test('Infrastructure docs navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Infrastructure').first().click();
    await expect(page).toHaveURL(/\/docs\/infrastructure/);
  });

  test('Tools docs navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Tools').first().click();
    await expect(page).toHaveURL(/\/docs\/tools/);
  });

  test('footer contains expected sections', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByText('Academics')).toBeVisible();
    await expect(footer.getByText('Programming')).toBeVisible();
    await expect(footer.getByText('University')).toBeVisible();
    await expect(footer.getByText('Infrastructure')).toBeVisible();
  });
});
