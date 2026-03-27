import {test} from "@playwright/test"
test("explicit wait",async({page})=>{
await page.goto("https://www.amazon.in/")
//await page.locator('input#twotabsearchtextbox').waitFor({state:'visible',timeout:4000});
await page.waitForSelector('input#twotabsearchtextbox',{state:'visible'})
await page.locator('input#twotabsearchtextbox').fill("shoes")

await page.locator('//div[@role="row"]', {hasText: ' for men sports'}).waitFor();
let a=await page.locator('//div[@role="row"]').allTextContents()
console.log(a);



})