import { test } from '@playwright/test';

 test('take screenshot of Amazon', async ({ page }) => {
  await page.goto("https://www.google.com");
 })
