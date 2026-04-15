import {test} from "@playwright/test"
test("multiple table",async({browser})=>{
    let context= await browser.newContext()
    let page =await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleTabs?sublist=3")

    let[tab1]=await Promise.all([
        page.waitForEvent('popup'),
        page.click("//button[text()='Shop Now']")])

        await tab1.click('//button[text()="Add to Cart"]')

})

test.only("tab",async({browser})=>{
let context=await browser.newContext();
let page=await context.newPage()
await page.goto("https://demoapps.qspiders.com/ui/browser/multipleTabs?sublist=3")
let[tab2]=await Promise.all([
    page.waitForEvent('popup'),
    page.click("//button[text()='Shop Now']")])
    await tab2.click('//button[text()="Add to Cart"]')

})