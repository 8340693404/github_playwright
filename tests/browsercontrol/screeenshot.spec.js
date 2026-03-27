
// for single screenshot

// import {test} from "@playwright/test"
// test("ss",async({page})=>{
    
   
    
//     await page .goto("https://www.google.com")
//      await page.screenshot({path:"screenshot/ss.png"})

// })

//for multiple screenshot

import {test} from "@playwright/test"
test("ss",async({page})=>{
    
   
    
    await page .goto("https://www.google.com")
     await page.screenshot({path:"screenshot/ss.png"})
     let time=new Date().getTime()
     await page.screenshot({path:`screenshot/page${time}.png`})

})