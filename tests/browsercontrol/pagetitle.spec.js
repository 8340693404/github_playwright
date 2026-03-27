import {test} from "@playwright/test"
test("browser control",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
//   let  title=await page.title();
//     console.log(title);
     console.log(await page.title());
    
    
    
})