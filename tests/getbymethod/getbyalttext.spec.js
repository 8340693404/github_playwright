import {test} from "@playwright/test"
test("get by alttext",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/login")
    

      await page.getByAltText("nopCommerce demo store").click()
      //await page.waitForTimeout(4000)
    




})