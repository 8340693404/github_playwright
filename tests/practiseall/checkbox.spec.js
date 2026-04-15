import { test } from "@playwright/test";

test("checkbox with explicit wait", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    let checkbox=page.locator('#checkBoxOption1')
    await checkbox.waitFor({ state: "visible", timeout: 10000 });
    await checkbox.click()
    console.log("checkbox successful");
    



})