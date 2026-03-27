import {test} from "@playwright/test"
test("attribute",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
   let a= await page.locator("//input[@id='male']").getAttribute('name')
   console.log(a);
   


    
  

    

      
      
    




})