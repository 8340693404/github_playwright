import {test} from "@playwright/test"
test("browser control",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
//   let  url=await page.url();
//     console.log(url);
     console.log(await page.url());
    
    
    
})