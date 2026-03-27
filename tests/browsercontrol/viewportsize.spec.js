import {test} from "@playwright/test"
test("browser control",async({page})=>{
    await page.goto("https://www.google.com")
    let size1=await page.viewportSize()
    console.log(size1);
    await page.setViewportSize({width:1000,height:500})
    let size=await page.viewportSize()
    console.log(size);
    

})
