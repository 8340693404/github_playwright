import {test,expect} from "@playwright/test"
test("radiobutton",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
// await page.locator('//input[@value="Upi"]').check()
// await page.waitForTimeout(4000)

// //asserting

// await expect(await page.locator('//input[@value="Upi"]')).toBeChecked()

 await page.locator('//input[@value="Upi"]')
 await expect(await page.locator('//input[@value="Upi"]').isChecked()).toBeFalsy()


})