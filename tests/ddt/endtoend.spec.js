import test from "@playwright/test"
import land from "../../testdata/pageobjectmodel/landing.page"
import signup from "../../testdata/pageobjectmodel/signup.page"
import login from "../../testdata/pageobjectmodel/login"
import homepage from "../../testdata/pageobjectmodel/homepage"
test ("endtoend pom",async ({page})=>{
    let landingpage=new landing(page)
    let signuppage=new signup(page)
    let loginpage=new login(page)
    let homepagepage=new homepage(page)
    //launch the url
await page.goto(" any url")
await landingpage.signlink.click()

    //pass name in name text field

    await signuppage.name.fill("hii")
    //pass eamil in email text field
    await signuppage.eamil.fill("abn@gmail.com")
    //password text field
    await signuppage.password.fill("hahahah")
    
    //contact no textfield
    await signuppage.contact.fill("9876543210")

    //click on login
    




}) 