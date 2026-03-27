import {test} from "@playwright/test"
test("mouse action doubleclick",async({page})=>{
// click

await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
await page.locator('//button[@id="btn"]').click()
await page.waitForTimeout(6000)

//right click
await page.locator('//a[text()="Right Click"]').click()
 await page.locator('//button[@id="btn_a"]').click({button:'right'})
await page.waitForTimeout(6000)

//double click
await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
await page.locator('#btn_a').dblclick()

await page.waitForTimeout(5000)
//down and up

await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
await page.locator("#circle").hover()
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await page.mouse.up()
    await page.waitForTimeout(4000)



})