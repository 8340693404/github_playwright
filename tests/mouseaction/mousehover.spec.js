import {test} from "@playwright/test"
test("mouse action doubleclick",async({page})=>{
// click

// await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
// await page.locator('//button[@id="btn"]').click()
// await page.waitForTimeout(6000)

// //right click
// await page.locator('//a[text()="Right Click"]').click()
//  await page.locator('//button[@id="btn_a"]').click({button:'right'})
// await page.waitForTimeout(6000)

// //double click
// await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
// await page.locator('#btn_a').dblclick()

// await page.waitForTimeout(5000)

//mouse hover

await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
await page.waitForTimeout(4000)
await page.mouse.move(100,200)
await page.waitForTimeout(4000)

})