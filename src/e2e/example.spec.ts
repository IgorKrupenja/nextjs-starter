import { expect, test } from '@playwright/test';

// TODO: Replace with your test
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test('should navigate to the Fedback page', async ({ page }) => {
//   await page.goto('http://localhost:3000/');
//   await page.click('text=Get in touch!');

//   await expect(page).toHaveURL('http://localhost:3000/feedback');
//   await expect(page.locator('h1')).toContainText('Let&apos;s get in touch!');
// });
