import {test} from "@playwright/test"

//test.use({actionTimeout:6000})  //apply globally..used for all
test("hardcoded",async({page})=>{

    

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //await page.waitForTimeout(2000)
    await page.getByText("Username",{exact:true}).fill("student")
     await page.getByText("Password",{exact:true}).fill("Password123")
     await page.locator('button#submit').click()


})

test("sugg",async({page})=>{
await page.goto("https://www.amazon.in/")
await page.locator('input#twotabsearchtextbox').fill("shoes")
await page.waitForTimeout(3000)
let a=await page.locator('//div[@role="row"]').allTextContents()
console.log(a);



})