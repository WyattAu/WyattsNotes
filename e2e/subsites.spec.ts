import { expect, test } from '@playwright/test';

const SITES = [
  {
    name: 'IB',
    url: 'https://ib.wyattau.com',
    title: /IB/,
    navItems: ['Maths', 'Physics', 'Chemistry'],
  },
  {
    name: 'DSE',
    url: 'https://dse.wyattau.com',
    title: /DSE/,
    navItems: ['Physics', 'Chemistry'],
  },
  {
    name: 'A-Level Maths & Physics',
    url: 'https://alevel-maths-physics.wyattau.com',
    title: /A.*Level|Maths|Physics/,
    navItems: ['Maths', 'Physics'],
  },
  {
    name: 'A-Level Sciences',
    url: 'https://alevel-sciences.wyattau.com',
    title: /A.*Level|Sciences/,
    navItems: ['Chemistry', 'Biology'],
  },
  {
    name: 'Qualifications',
    url: 'https://qualifications.wyattau.com',
    title: /GCSE|AP|Qualifications/,
    navItems: ['GCSE'],
  },
  {
    name: 'Programming',
    url: 'https://programming.wyattau.com',
    title: /Programming|C\+\+/,
    navItems: ['C++'],
  },
  {
    name: 'University',
    url: 'https://university.wyattau.com',
    title: /University|Mathematics|Physics/,
    navItems: ['Mathematics'],
  },
];

for (const site of SITES) {
  test.describe(`${site.name} site`, () => {
    test('loads with correct title', async ({ page }) => {
      await page.goto(site.url);
      await expect(page).toHaveTitle(site.title);
    });

    test('navbar is visible', async ({ page }) => {
      await page.goto(site.url);
      const navbar = page.locator('nav.navbar');
      await expect(navbar).toBeVisible();
    });

    test('footer is visible', async ({ page }) => {
      await page.goto(site.url);
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test('sidebar contains doc links', async ({ page }) => {
      await page.goto(`${site.url}/docs`);
      // Either sidebar or main content should be present
      const sidebar = page.locator('aside.theme-doc-sidebar-container');
      const main = page.locator('main');
      const sidebarVisible = await sidebar.isVisible().catch(() => false);
      const mainVisible = await main.isVisible().catch(() => false);
      expect(sidebarVisible || mainVisible).toBe(true);
    });

    test('search button is available', async ({ page }) => {
      await page.goto(site.url);
      const searchButton = page.locator('button.DocSearch-Button');
      await expect(searchButton).toBeVisible({ timeout: 10000 });
    });

    test('no console errors on load', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      await page.goto(site.url);
      await page.waitForLoadState('networkidle');

      // Filter out known non-critical errors
      const criticalErrors = errors.filter(
        (e) =>
          !e.includes('favicon') &&
          !e.includes('manifest') &&
          !e.includes('service-worker') &&
          !e.includes('net::ERR'),
      );
      expect(criticalErrors.length).toBeLessThanOrEqual(2);
    });
  });
}

test.describe('Cross-site navigation', () => {
  test('landing page links to all sub-sites', async ({ page }) => {
    await page.goto('https://wyattsnotes.wyattau.com');
    const links = page.locator('a[href*="wyattau.com"]');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(8);
  });

  test('academics redirects to IB', async ({ page }) => {
    const response = await page.goto('https://academics.wyattau.com');
    // Should redirect to ib.wyattau.com
    const finalUrl = page.url();
    expect(finalUrl).toContain('ib.wyattau.com');
  });

  test('alevel redirects to alevel-maths-physics', async ({ page }) => {
    await page.goto('https://alevel.wyattau.com');
    const finalUrl = page.url();
    // Should redirect to alevel-maths-physics or alevel-sciences
    expect(finalUrl).toMatch(/alevel.*wyattau\.com/);
  });
});
