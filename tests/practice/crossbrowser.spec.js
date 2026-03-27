import { test, expect } from '@playwright/test';

test('open Amazon website', async ({ page }) => {
  console.log('Running test in different browsers');

  await page.goto('https://www.amazon.in/');

  await expect(page).toHaveTitle(/Amazon/);
});