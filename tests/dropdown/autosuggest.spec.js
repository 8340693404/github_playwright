import {test,expect} from "@playwright/test"
test("auto suggestion",async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
   // await page.waitForTimeout(4000)
   await page.waitForSelector('(//div[@class="s-suggestion-container"])[1]')

//     let allsugg=await page.locator('//div[@class="s-suggestion-container"]').all()
//     for(let option of allsugg){
//         let text=await option.textContent()
//         if(text.includes(" for women")){
//             await option.click()
//             break;

//         }
//     }


// await page.waitForTimeout(4000)

await page.keyboard.press("ArrowDown")
await page.keyboard.press('Enter')
await page.waitForTimeout(4000)


})