import {test,expect} from "@playwright/test"
test("checkbox",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")


//  await page.locator('//input[@id="domain_b"]').click()
//  await page.waitForTimeout(3000)
//  await page.locator('//input[@id="domain_b"]').click()
//  await page.waitForTimeout(3000)

await page.locator('//input[@id="domain_b"]').check()
 await page.waitForTimeout(3000)


 //assert veriry checked 

 await expect(page.locator('//input[@id="domain_b"]')).toBeChecked()


 await page.locator('//input[@id="domain_b"]').uncheck()

 //verify unchecked

 await expect(page.locator('//input[@id="domain_b"]').isChecked()).toBeFalsy
 await page.waitForTimeout(3000)
 
 
 
 


})