import {chromium, test} from "@playwright/test"
test("instance",async()=>{
    //let browser=await chromium.launch()
    let browser=await chromium.launch()
    let context=await browser.newContext()
    let page=await context.newPage()
    
    await page .goto("https://www.google.com")
    
    
    
    
    
})