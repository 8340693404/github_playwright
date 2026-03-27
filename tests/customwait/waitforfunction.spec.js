import {test} from "@playwright/test"
import { log } from "node:console"
test("wait for function",async({page})=>{
await page.goto("https://www.amazon.in/")
// await page.locator('input#twotabsearchtextbox').fill(' Hp laptop')
// await page.waitForFunction(()=>{let ele=document.querySelectorAll('.s-suggestion-container')
//     return ele.length>2
// })
// let allautosugg=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
// console.log(allautosugg);
await page.waitForFunction(()=>{ return document.readyState==='complete'})


await page.locator('input#twotabsearchtextbox').fill(' Hp laptop')

})