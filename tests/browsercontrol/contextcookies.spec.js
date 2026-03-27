import {test} from "@playwright/test"
test("browser control",async({browser})=>{
    
    let context=await browser.newContext()
    let page=await context.newPage()
    console.log(await context.cookies());
    await page .goto("https://www.google.com")
    console.log(await context.cookies());
    
    
    
    
})