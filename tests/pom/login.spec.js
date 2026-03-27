import {test} from "@playwright/test"
import loginpage from "../../testdata/pageobjectmodel/loginpage.page"
test("login",async({page})=>{

let l=new loginpage(page)

    //launch url

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    //pass un
    await l.usernameTextfield.fill("student")

    //pass password

    await l.passwordTextfield.fill("Password123")

    //click on submit button
    await l.submitButton.click()
    await page.waitForTimeout(3000)

})