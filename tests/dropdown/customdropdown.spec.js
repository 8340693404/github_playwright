import {test,expect} from "@playwright/test"
test("custom dropdown",async({page})=>{
    await page.goto('https://www.amazon.in/s?k=shoes&crid=182QL447BXDMQ&sprefix=shoes%2Caps%2C485&ref=nb_sb_noss_2')
    await page.locator('//span[@class="a-dropdown-prompt"]').click({force:true})
    await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    let options=await page.locator('//a[@class="a-dropdown-link"]').all()
//     for(let option of options){
//         let text=await option.textContent()
//         if(text.includes('Best ')){
//             await option.click()
//         }
//     }

// await page.waitForTimeout(4000)
let text="Price: Low to High"
await page.locator(`//a[@class="a-dropdown-link" and text()="${text}"]`).click()
await page.waitForTimeout(4000)

})