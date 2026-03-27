import {test} from "@playwright/test"
import loginpage from "../../testdata/pageobjectmodel/loginpage.page"
import logindata from "../../testdata/logindata.json"


test("login",async({page})=>{
let l=new loginpage(page)
    let URL=logindata.url
    let user=logindata.un
    let password=logindata.pass

    //launch url

    await page.goto(URL)

    //pass un
    await l.usernameTextfield.fill(user)

    //pass password

    await l.passwordTextfield.fill(password)

    //click on submit button
    await l.submitButton.click()
    await page.waitForTimeout(3000)

})