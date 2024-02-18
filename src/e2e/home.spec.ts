import { expect, test } from '@playwright/test';

test('should navigate to the Fedback page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Get in touch!');

  await expect(page).toHaveURL('http://localhost:3000/feedback');
  await expect(page.locator('h1')).toContainText("Let's get in touch!");
});
