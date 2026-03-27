import test from "@playwright/test"
import land from "../../testdata/pageobjectmodel/landing.page"
import signup from "../../testdata/pageobjectmodel/signup.page"
import login from "../../testdata/pageobjectmodel/login"
import homepage from "../../testdata/pageobjectmodel/homepage"
import endtoend from "../../testdata/endtoend.json"
test ("endtoend pom",async ({page})=>{
    let url=testdata.url
     let uname=testdata.uname
      let email=testdata.eamil
       let pawd=testdata.pawd
        let con=testdata.con
         
    let landingpage=new landing(page)
    let signuppage=new signup(page)
    let loginpage=new login(page)
    let homepagepage=new homepage(page)
    //launch the url
await page.goto( url)
await landingpage.signlink.click()

    //pass name in name text field

    await signuppage.name.fill(uname)
    //pass eamil in email text field
    await signuppage.eamil.fill(email)
    //password text field
    await signuppage.password.fill(pawd)
    
    //contact no textfield
    await signuppage.contact.fill(con)

    //click on login
    




}) 