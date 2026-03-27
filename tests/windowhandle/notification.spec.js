import {expect, test} from "@playwright/test"
 test("notification",async({browser})=>{ 
//permission==denied

   //  let context=await browser.newContext()
   //  let page =await context.newPage()
   //  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
   //  //await page.click("//button[text()='Notification']")

   //  //===or==
   //  await page.getByRole("button",{name:"Notification"}).click() 
   //  let result =await page .evaluate(()=>{return Notification.requestPermission()})
   //  console.log(`permissions:${result}`);


   //permission==granted


   // let context=await browser.newContext({permissions:["notifications"]})
   //  let page =await context.newPage()
   //  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
   //  //await page.click("//button[text()='Notification']")

   //  //===or==
   //  await page.getByRole("button",{name:"Notification"}).click() 
   //  let result =await page .evaluate(()=>{return Notification.requestPermission()})
   //  console.log(`permissions:${result}`);
    


   //permission=denied

   // let context=await browser.newContext({permissions:[]})
   //  let page =await context.newPage()
   //  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
   //  //await page.click("//button[text()='Notification']")

   //  //===or==
   //  await page.getByRole("button",{name:"Notification"}).click() 
   //  let result =await page .evaluate(()=>{return Notification.requestPermission()})
   //  console.log(`permissions:${result}`);
    


   let context=await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]})
    let page =await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    //await page.click("//button[text()='Notification']")

    //===or==
    await page.getByRole("button",{name:"Notification"}).click() 
    let result =await page .evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result}`);

    //revoke all permissions
    
    await context.clearPermissions()
    let result1=await page .evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result1}`);

    



 })