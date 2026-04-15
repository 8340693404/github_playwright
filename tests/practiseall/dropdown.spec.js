import {test} from "@playwright/test"
test("dropdown",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
   let dd= await page.locator('#dropdown-class-example').selectOption([{index:2},{index:3}])
   console.log(dd);
   




})