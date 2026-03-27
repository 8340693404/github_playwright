import {test} from "@playwright/test"
test("get by label",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/login")
    // await page.getByLabel("Email:").fill("ahahbgs24@gmail.com")
    await page.waitForTimeout(4000)
      await page.getByText("Electronics").click()
      await page.waitForTimeout(4000)
    




})