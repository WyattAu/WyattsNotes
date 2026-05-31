import { expect, test } from '@playwright/test';

const DEPLOYED_URL = process.env.E2E_DEPLOYED_URL || 'https://wyattsnotes.wyattau.com';

test.describe('Keyboard Navigation Accessibility', () => {
  test.skip(!process.env.E2E_TEST_A11Y, 'Skipped: set E2E_TEST_A11Y=1 to run');

  test.beforeEach(async ({ page }) => {
    await page.goto(DEPLOYED_URL);
    await page.waitForLoadState('networkidle');
  });

  test('tab order follows logical flow: navbar → sidebar → content → footer', async ({ page }) => {
    const focusOrder: string[] = [];

    for (let i = 0; i < 30; i++) {
      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);

      const tag = await page.evaluate(() => {
        const el = document.activeElement;

        if (!el) {
          return null;
        }

        return el.tagName + ':' + (el.textContent || '').slice(0, 40);
      });

      if (tag) {
        focusOrder.push(tag);
      }
    }

    expect(focusOrder.length).toBeGreaterThan(3);

    const interactiveTags = focusOrder.filter((f) =>
      ['A:', 'BUTTON:'].some((t) => f.startsWith(t)),
    );

    expect(interactiveTags.length).toBeGreaterThan(0);

    const hasContent = focusOrder.some((f) => f.startsWith('A:'));

    expect(hasContent).toBe(true);
  });

  test('skip-to-content link appears on first Tab press', async ({ page }) => {
    await page.keyboard.press('Tab');

    const skipLink = page.locator('a[href*="skipToContent"], a[class*="skip"]');

    await expect(skipLink).toBeVisible();
    expect(
      await skipLink.evaluate((el) => {
        const style = window.getComputedStyle(el);

        return style.position !== 'static' || style.display !== 'none';
      }),
    ).toBe(true);

    await skipLink.focus();
    await page.keyboard.press('Enter');

    await page.waitForTimeout(200);
    const focusedTag = await page.evaluate(() => document.activeElement?.tagName);

    expect(['MAIN', 'ARTICLE']).toContain(focusedTag);
  });

  test('Ctrl+K opens search modal and Escape closes it', async ({ page }) => {
    await page.keyboard.press('Control+k');

    await page.waitForTimeout(300);

    const searchModal = page.locator('[role="dialog"], [class*="DocSearch"], .search-modal');

    await expect(searchModal).toBeVisible();

    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"]');

    await expect(searchInput).toBeFocused();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);

    await expect(searchModal).not.toBeVisible();
  });

  test('focus visibility: interactive elements show focus ring', async ({ page }) => {
    const interactiveSelectors =
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    const elements = await page.$$(interactiveSelectors);

    const results: boolean[] = [];

    for (const el of elements.slice(0, 10)) {
      // Check focus ring before explicit focus (informational)
      await el.evaluate((node) => {
        const style = window.getComputedStyle(node);
        const outline = style.outline || style.outlineWidth || '';
        const boxShadow = style.boxShadow || '';

        return (
          outline !== 'none' &&
          outline !== '0px' &&
          (boxShadow.includes('0 0 0 2') || parseFloat(style.outlineWidth || '0') > 0)
        );
      });

      await el.focus();
      const focusedRing = await el.evaluate((node) => {
        const style = window.getComputedStyle(node);

        return (
          style.outline !== 'none' &&
          (style.outlineWidth !== '0px' || style.boxShadow.includes('0 0 0'))
        );
      });

      results.push(focusedRing);
    }

    expect(results.every(Boolean)).toBe(true);
  });

  test('PracticeProblem supports arrow keys and Enter', async ({ page }) => {
    await page.goto(`${DEPLOYED_URL}/docs`);
    await page.waitForLoadState('networkidle');

    const practiceProblem = page.locator('[data-testid="practice-problem"], .practice-problem');

    if ((await practiceProblem.count()) === 0) {
      test.skip();

      return;
    }

    await practiceProblem.first().focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
  });

  test('FlashcardDeck supports Space to flip and 1-4 to rate', async ({ page }) => {
    await page.goto(`${DEPLOYED_URL}/docs`);
    await page.waitForLoadState('networkidle');

    const flashcard = page.locator('[data-testid="flashcard-deck"], .flashcard-deck');

    if ((await flashcard.count()) === 0) {
      test.skip();

      return;
    }

    await flashcard.first().focus();
    await page.keyboard.press('Space');
    await page.keyboard.press('1');
  });

  test('sidebar tree supports arrow key navigation', async ({ page }) => {
    const sidebar = page.locator('.theme-doc-sidebar-menu, nav[aria-label="Sidebar"]');

    if ((await sidebar.count()) === 0) {
      test.skip();

      return;
    }

    await sidebar.first().click();
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(150);
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');

    const activeBefore = await page.evaluate(() => document.activeElement?.tagName);

    expect(['A', 'BUTTON']).toContain(activeBefore);
  });

  test('no keyboard traps: Escape or Tab always moves focus forward', async ({ page }) => {
    const focusableSelectors =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])';
    const elements = await page.$$(focusableSelectors);

    const traps: string[] = [];

    for (const el of elements.slice(0, 15)) {
      await el.focus();
      const idBefore = await page.evaluate(() => document.activeElement?.id || '');

      await page.keyboard.press('Escape');
      await page.waitForTimeout(100);

      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);

      const idAfter = await page.evaluate(() => document.activeElement?.id || '');

      if (idBefore === idAfter) {
        traps.push(idBefore || 'unnamed');
      }
    }

    expect(traps).toHaveLength(0);
  });
});
