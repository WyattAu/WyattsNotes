import { expect, test } from '@playwright/test';

const DEPLOYED_URL = process.env.E2E_DEPLOYED_URL || 'https://wyattsnotes.wyattau.com';

test.describe('ARIA & Screen Reader Accessibility', () => {
  test.skip(!process.env.E2E_TEST_A11Y, 'Skipped: set E2E_TEST_A11Y=1 to run');

  test.beforeEach(async ({ page }) => {
    await page.goto(DEPLOYED_URL);
    await page.waitForLoadState('networkidle');
  });

  test('landmark roles exist: navigation, main, contentinfo', async ({ page }) => {
    const landmarks = await page.evaluate(() => {
      const roles: Record<string, number> = {};

      document.querySelectorAll('[role]').forEach((el) => {
        const role = el.getAttribute('role');

        if (role) {
          roles[role] = (roles[role] || 0) + 1;
        }
      });

      return roles;
    });

    expect(landmarks['navigation']).toBeGreaterThanOrEqual(1);
    expect(landmarks['main']).toBeGreaterThanOrEqual(1);
    expect(landmarks['contentinfo']).toBeGreaterThanOrEqual(1);
  });

  test('heading hierarchy has no skipped levels', async ({ page }) => {
    const levels = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));

      return headings.map((h) => parseInt(h.tagName.charAt(1), 10));
    });

    expect(levels.length).toBeGreaterThan(0);
    expect(levels[0]).toBe(1);

    const violations: string[] = [];

    for (let i = 1; i < levels.length; i++) {
      if (levels[i] > levels[i - 1] + 1) {
        violations.push(`h${levels[i - 1]} → h${levels[i]}`);
      }
    }

    expect(violations).toHaveLength(0);
  });

  test('all images have alt attributes', async ({ page }) => {
    const missingAlt = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .filter((img) => !img.hasAttribute('alt'))
        .map((img) => img.src.slice(0, 80));
    });

    expect(missingAlt).toHaveLength(0);
  });

  test('no empty links or "click here" link text', async ({ page }) => {
    const badLinks = await page.evaluate(() => {
      return Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))
        .filter((a) => {
          const text = (a.textContent || '').trim().toLowerCase();

          return text === '' || text === 'click here' || text === 'here' || text === 'read more';
        })
        .map((a) => a.href.slice(0, 80));
    });

    expect(badLinks).toHaveLength(0);
  });

  test('search input has associated label', async ({ page }) => {
    const hasLabel = await page.evaluate(() => {
      const searchInput = document.querySelector(
        'input[type="search"], input[aria-label], input[aria-labelledby]',
      );

      if (!searchInput) {
        return false;
      }

      return (
        searchInput.hasAttribute('aria-label') ||
        searchInput.hasAttribute('aria-labelledby') ||
        !!searchInput.closest('label') ||
        !!document.querySelector(`label[for="${searchInput.id}"]`)
      );
    });

    expect(hasLabel).toBe(true);
  });

  test('ARIA live regions exist for dynamic content', async ({ page }) => {
    await page.keyboard.press('Control+k');
    await page.waitForTimeout(300);

    const hasLiveRegion = await page.evaluate(() => {
      return (
        document.querySelectorAll('[aria-live]').length > 0 ||
        document.querySelectorAll('[role="status"]').length > 0 ||
        document.querySelectorAll('[role="alert"]').length > 0
      );
    });

    expect(hasLiveRegion).toBe(true);
  });

  test('data tables have proper th elements', async ({ page }) => {
    await page.goto(`${DEPLOYED_URL}/docs`);
    await page.waitForLoadState('networkidle');

    const tablesWithoutHeaders = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('table'))
        .filter(
          (table) =>
            table.querySelectorAll('th').length === 0 &&
            table.querySelectorAll('thead').length === 0,
        )
        .map((table, i) => `table[${i}]`);
    });

    expect(tablesWithoutHeaders).toHaveLength(0);
  });
});
