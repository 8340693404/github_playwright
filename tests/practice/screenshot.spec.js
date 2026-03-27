import { test } from '@playwright/test';

// test('take screenshot of Amazon', async ({ page }) => {
//   await page.goto("https://www.google.com");

//   // Take full page screenshot
//   await page.screenshot({ path: 'screenshot/google33.png , fullPage: true'});

//   // OR

//   await page.screenshot({ path: 'screenshot/google33.png'});

//screenshot paticular


test('take screenshot', async ({ page }) => {
   await page.goto("https://demo.opencart.com/");

   // Take full page screenshot
  await page.screenshot({ path: 'screenshot/homepage.png' })



 })

 //fullpage

 
test('take full screenshot', async ({ page }) => {
   await page.goto("https://www.myntra.com/");
   //await page.waitForTimeout(4000)

   // Take full page screenshot

  await page.screenshot({ path: 'screenshot/fullpagemyntra.png', fullPage: true })



 })

 // screenshot specific element

 test.only('take specific element screenshot', async ({ page }) => {
   await page.goto("https://www.amazon.in/");
   //await page.waitForTimeout(4000)

   // Take full page screenshot

  await page.locator('//img[@alt="Refrigerators"]').screenshot({ path: 'screenshot/specelescreenshot.png', fullPage: true })



 })
