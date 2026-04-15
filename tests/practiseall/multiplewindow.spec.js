import{expect,test} from "@playwright/test"
test("multiple window",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
    let[window2]=await Promise.all([
        page.waitForEvent('popup'),
        page.click("//button[text()='Shop Now']")])

        await window2.locator("//button[text()='Add to Cart']").click()

        let title1=await page.title()
         await expect(window2.title()).not.toBe(title1)
         console.log("successful");
         

})