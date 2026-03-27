import {test} from "@playwright/test"
test("locator",async({page})=>{
    await page.goto("https://www.practicetestautomation.com/practice-test-login/")

//==css selector=====

    //username text field

    // await page.locator("input#username").fill("student")

    // //password

    // await page.locator("input#password").fill("Password123")
    // await page.waitForTimeout(3000)

    // //submit button

    // await page.locator('[class="btn"]').click()

    //===xpath===

    await page.locator("//input[@id='username']").fill("student")

    //password

    await page.locator("//input[@id='password']").fill("Password123")
    await page.waitForTimeout(3000)

    //submit button

    await page.locator("//button[@id='submit']").click()




})