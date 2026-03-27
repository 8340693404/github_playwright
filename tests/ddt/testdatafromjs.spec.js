import {test} from "@playwright/test"
import data from "../../testdata/multipledata1.json"
test("json ",async({page})=>{
    for(let d of data.valid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
     await page.locator("input#password").fill(d.password)
     await page.getByRole("button",{name:"Submit"})
     let title=await page.title() //validate the title
    //console.log(title);

    if(title=="Test Login | Practice Test Automation"){
        console.log("valid cred");
        
    }
    else{
        console.log("invalid cred");
        
    }

    
   }
    
    
    for(let d of data.invalid){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.username)
     await page.locator("input#password").fill(d.password)
     await page.getByRole("button",{name:"Submit"})
     let title=await page.title() //validate the title
    //console.log(title);

    if(title=="Test Login | Practice Test Automation"){
        console.log("valid cred");
        
    }
    else{
        console.log("invalid cred");
        
    }

    
   }
    


})