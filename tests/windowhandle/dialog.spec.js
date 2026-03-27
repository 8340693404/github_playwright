import {expect, test} from "@playwright/test"
// test("dialog",async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")

// await page.getByRole("button",{name:'Simple Alert'}).click()
// await page.waitForTimeout(2000)
// await page.getByRole("button",{name:'Confirmation Alert'}).click()
// await expect(page.locator('//p[@id="demo"]')).toContainText("Cancel")
// await page.waitForTimeout(2000)
// await page.getByRole("button",{name:'Prompt Alert'}).click()
// await expect(page.locator('//p[@id="demo"]')).toContainText("cancelled")
// await page.waitForTimeout(2000)

//====using page.on()

// page.on("dialog",(dialog)=>{dialog.accept()})

// await page.getByRole("button",{name:'Simple Alert'}).click()
// await page.getByRole("button",{name:'Confirmation Alert'}).click()
// //await expect(page.locator('//p[@id="demo"]')).toContainText("Cancel")
// await page.getByRole("button",{name:'Prompt Alert'}).click()
// //await expect(page.locator('//p[@id="demo"]')).toContainText("cancelled")
// await page.waitForTimeout(2000)


// page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
//     console.log(await dialog.message());   //print the message
    
//     await dialog.accept()
// }

// else if(dialog.type()=='confirm'){
//     await dialog.accept()
// }
// else if(dialog.type()=='prompt'){
//     if(dialog.defaultValue=="tom"){

//     console.log(await dialog.defaultValue()); }
//     else{ //print the deafault value present in prompt
    
//     await dialog.accept("tom")
//     }
// }
// })

// await page.getByRole("button",{name:'Simple Alert'}).click()
// await page.getByRole("button",{name:'Confirmation Alert'}).click()
// await page.waitForTimeout(2000)
// await expect(page.locator('//p[@id="demo"]')).toContainText("OK")
// await page.getByRole("button",{name:'Prompt Alert'}).click()
// await expect(await page.locator('//p[@id="demo"]').textContent()).toBe("Hello tom! How are you today?")
// await page.waitForTimeout(2000)
// })


//===page.once()

test("dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.getByRole("button",{name:'Simple Alert'}).click()
await page.waitForTimeout(2000)
 await page.getByRole("button",{name:'Confirmation Alert'}).click()
 await page.waitForTimeout(2000)
 page.once("dialog",(dialog)=>{dialog.accept("hii")})
await page.getByRole("button",{name:'Prompt Alert'}).click()
await page.waitForTimeout(2000)
await page.reload()
await page.getByRole("button",{name:'Prompt Alert'}).click()
await page.waitForTimeout(2000)





})