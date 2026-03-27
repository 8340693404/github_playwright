import {test} from "@playwright/test"
test("mouse action click",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
await page.locator('//button[@id="btn"]').click()
await page.waitForTimeout(4000)


})