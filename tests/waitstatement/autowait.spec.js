import {test} from "@playwright/test"

test.use({actionTimeout:6000})  //apply globally..used for all
test("fill",async({page})=>{

    //await page.goto("https://demoapps.qspiders.com/ui/radio")

    //page.setDefaultTimeout(3000)

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("student")
    await page.locator('//button[@class="bt]').click({timeout:1000})




})