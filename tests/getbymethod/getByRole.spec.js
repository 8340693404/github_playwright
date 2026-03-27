import {test} from "@playwright/test"
test("get by alttext",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/electronics")
    

      await page.getByRole("button",{name:'Electronics'}).click()

      
    




})