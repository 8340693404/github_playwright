import { test} from "@playwright/test"
import fs from "fs"
// let datafile=fs.readFileSync("C:/Users/ASUS/Desktop/playwright/testdata/singlesetdata.json")
// let data=JSON.parse(datafile)  //convert json to javascript file

// //==get single data from json file  

//  test("single data using json",async({page})=>{ 
//     console.log(data.greet);
    
// })


//read multiple data from json

// let datafile=fs.readFileSync("C:/Users/ASUS/Desktop/playwright/testdata/singlesetdata.json")
// let data=JSON.parse(datafile)  //convert json to javascript file

// //==get multiple data from json file  

//  test("get multiple data using json",async({page})=>{ 

//     data.forEach(d => {

//         console.log(d.greet);
//     });
    
    
// })

//get the data from json====login the app


// let datafile=fs.readFileSync("C:/Users/ASUS/Desktop/playwright/testdata/getdataurl.json")
// let data=JSON.parse(datafile)  //convert json to javascript file

// //==get single data from json file  

//  test("single data using json",async({page})=>{ 
//     await page.goto(data.url)
//     await page.locator("input#username").fill(data.username)
//     await page.locator("input#password").fill(data.password)
//     await page.getByRole("button",{name:"Submit"}).click()
//     let title=await page.title() //validate the title
//     //console.log(title);

//     if(title=="Test Login | Practice Test Automation"){
//         console.log("valid cred");
        
//     }
//     else{
//         console.log("invalid cred");
        
//     }


// get multiple data from json

let datafile=fs.readFileSync("C:/Users/ASUS/Desktop/playwright/testdata/multipledata.json")
let data=JSON.parse(datafile)  //convert json to javascript file



 test("get multiple data from json",async({page})=>{ 

   for(let testdata of data){
    let u=testdata.url
    let un=testdata.username
    let p=testdata.password
    await page.goto(u)
    await page.locator("input#username").fill(un)
     await page.locator("input#password").fill(p)

    await page.getByRole("button",{name:"Submit"}).click()
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