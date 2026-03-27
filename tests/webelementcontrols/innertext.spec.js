import {test} from "@playwright/test"
test("fill",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").fill("mithun")
    let text1=await page.locator("#name").inputValue()
    console.log(text1);
    
    await page.locator("#email").type("mithun123@gmail.com")
    await page.locator("#password").fill("123mmm")
    await page.locator("//button[@type='submit']").click()

    //====textcontent

   // let text=await page.locator("(//section[@class='poppins text-[14px]'and text()='Radio Button'])").textContent()

   //=====innertext

   //let text=await page.locator("(//section[@class='poppins text-[14px]'and text()='Radio Button'])").innerText()

   //====alltextcontents
   
let text=await page.locator("//section[@class='poppins text-[14px]']").allTextContents()

    console.log(text);
    
    
    

    

      
      
    




})