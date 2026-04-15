import {expect, test} from "@playwright/test"
test("switch window",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
   await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
   let[window2]=await Promise.all([
        page.waitForEvent('popup'),
     
      page.click("//button[text()='Shop Now']")])

//       page.waitForEvent('popup') listens for the new window that opens when you click the button.
// Promise.all ensures the click triggers the popup.

   await window2.locator("//button[text()='Add to Cart']").click()

   //assert ..validate
   let title1 =await page.title()
   await expect(window2.title()).not.toBe(title1)


})