const { test, expect } = require('@playwright/test');

test('dropdown test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('#dropdown-class-example').selectOption('option2');
  await expect(page.locator('#dropdown-class-example')).toHaveValue('option2');
});