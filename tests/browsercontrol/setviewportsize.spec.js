import {test} from "@playwright/test"
test("browser control",async({page})=>{
    await page.goto("https://www.google.com")
    await page.setViewportSize({width:1000,height:500})

})
