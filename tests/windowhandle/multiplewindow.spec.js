import {expect, test} from "@playwright/test"
test("switch window",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
   await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
   let[window2]=await Promise.all([
        page.waitForEvent('popup'),
     
      page.click("//button[text()='Shop Now']")])
   await window2.locator("//button[text()='Add to Cart']").click()

   //assert ..validate
   let title1 =await page.title()
   await expect(await window2.title()).not.toBe(title1)


})