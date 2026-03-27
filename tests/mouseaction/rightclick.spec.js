import {test} from "@playwright/test"
test("mouse action rightclick",async({page})=>{
// await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
// await page.locator('//button[@id="btn_a"]').click({button:'right'})
// await page.waitForTimeout(6000)
await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
await page.locator('//button[@id="btn"]').click()
await page.waitForTimeout(6000)
await page.locator('//a[text()="Right Click"]').click()
 await page.locator('//button[@id="btn_a"]').click({button:'right'})
await page.waitForTimeout(6000)


})