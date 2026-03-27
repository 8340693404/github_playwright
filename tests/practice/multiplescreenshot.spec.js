
import {test} from "@playwright/test"
test("ss",async({page})=>{
    
   
    
    await page .goto("https://www.myntra.com/")
     await page.screenshot({path:"screenshot/mithun4 .png"})
     let time=new Date().getTime()
     await page.screenshot({path:`screenshot/page${time}.png`})

})