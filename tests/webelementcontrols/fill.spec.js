import {test} from "@playwright/test"
test("fill",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").fill("mithun")
    await page.locator("#email").type("mithun123@gmail.com")
    await page.locator("#password").fill("123mmm")
    await page.locator("//button[@type='submit']").click()
    
    

    

      
      
    




})