import {test} from "@playwright/test"
test("wait for navigation",async({page})=>{
await page.goto("https://www.amazon.in/")
await Promise.all([
 page.waitForNavigation(),
 page.click("#nav-cart-text-container")


])

})