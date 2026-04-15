import {test} from "@playwright/test"
test("screenshot",async({page})=>{
    //await page.goto("https://www.flipkart.com/")

    //full screenshot

    //await page .screenshot({path: 'screenshot/homepage26.png' , fullPage: true})

    //specific 

   // await page .screenshot({path: 'screenshot/homepage27.png'})

   //specific element

   
await page.goto("https://www.amazon.in/");

// Wait until the image is visible
let element = page.locator("img[alt*='ACs']");
await element.waitFor({ state: 'visible', timeout: 60000 }); // wait up to 60s

// Take screenshot of that element
await element.screenshot({ path: 'screenshot/eleac55.png' });

})