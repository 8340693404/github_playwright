import {test} from "@playwright/test"
test("drag an ddrop",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
let source= await page.locator("//div[text()='Mobile Charger']")
let target=await page.locator("//div[text()='Mobile Accessories']/parent::div")
 await source.dragTo(target)


})