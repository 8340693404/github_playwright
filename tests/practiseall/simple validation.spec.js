import {test,expect} from "@playwright/test" 
test('first test',async({page})=>{
    await page.goto("https://www.amazon.in/")
    //await expect (page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    await expect (page).toHaveURL("https://www.amazon.in/")

})

