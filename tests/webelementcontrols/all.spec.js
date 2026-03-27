import {test} from "@playwright/test"
test("all",async({page})=>{

    await page.goto("https://www.flipkart.com/")
   let a= await page.locator("//div[@class='css-175oi2r r-1awozwy']").all()
   console.log(a);
   let a1= await page.locator("//div[@class='css-175oi2r r-1awozwy']").first()
   console.log(a1);
   let a2= await page.locator("//div[@class='css-175oi2r r-1awozwy']").last()
   console.log(a2);
   let a3= await page.locator("//div[@class='css-175oi2r r-1awozwy']").nth(5)
   console.log(a3);
   
   


    
  

    

      
      
    




})