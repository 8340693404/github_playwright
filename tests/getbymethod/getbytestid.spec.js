import {test} from "@playwright/test"
test("get by alttext",async({page})=>{

    
    

      await page.goto("https://www.saucedemo.com/")
      await page.getByTestId("password").fill("hggffdddd")
      
    




})