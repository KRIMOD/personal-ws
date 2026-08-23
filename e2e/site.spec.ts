import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/about',
  '/blog',
  '/blog/la-theorie-du-chaos',
  '/blog/les-traditions-ya-wlido',
];

for (const route of routes) {
  test(`${route} renders a page heading`, async ({ page }) => {
    const response = await page.goto(route);

    expect(response?.ok()).toBe(true);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  });
}

test('site metadata belongs to the current owner', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Mamar Abdelkrim Temam/);
  await expect(page.locator('body')).not.toContainText('Lee Robinson');
  await expect(page.locator('body')).not.toContainText('######');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /^https?:\/\//
  );
});

test('articles expose French semantics without failed view requests', async ({
  page,
}) => {
  const failedViewRequests: string[] = [];
  page.on('response', (response) => {
    if (response.url().includes('/api/views') && !response.ok()) {
      failedViewRequests.push(response.url());
    }
  });

  await page.goto('/blog/la-theorie-du-chaos');

  await expect(page.locator('article')).toHaveAttribute('lang', 'fr');
  await expect(page.locator('article time')).toHaveAttribute(
    'datetime',
    '2018-08-18'
  );
  expect(failedViewRequests).toEqual([]);
});

test('baseline security headers are present', async ({ request }) => {
  const response = await request.get('/');

  expect(response.headers()['x-content-type-options']).toBe('nosniff');
  expect(response.headers()['x-frame-options']).toBe('DENY');
  expect(response.headers()['referrer-policy']).toBe(
    'strict-origin-when-cross-origin'
  );
  expect(response.headers()['content-security-policy']).toContain(
    "default-src 'self'"
  );
});
