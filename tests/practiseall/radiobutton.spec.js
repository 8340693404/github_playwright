// import {test} from "@playwright/test"
// test("radio",async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
//     await page.locator('//input[@value="radio1"]').check()
    

// })



import { test } from "@playwright/test";

test("radio button with explicit wait", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // Store the locator in a variable
    let radioButton = page.locator('//input[@value="radio1"]');

    // Explicit wait: wait until the radio button is visible and enabled
    await radioButton.waitFor({ state: "visible", timeout: 10000 });

    // Now check the radio button
    await radioButton.check();

    console.log("Radio button checked successfully!");
});