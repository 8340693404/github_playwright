import {test} from "@playwright/test"
test("mouse action doubleclick",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(3000)
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
})