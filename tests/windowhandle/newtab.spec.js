import {expect, test} from "@playwright/test"
//test("new tab",async({browser})=>{
    //let context=await browser.newContext()
    // let page1=await context.newPage()
    // await page1.goto("https://www.amazon.in/")
    // let page2=await context.newPage()
    // await page2.goto("https://www.flipkart.com/")
//     let page=await context.newPage()
//     await page.goto("https://www.redbus.in/")
//     await page.click('//a[text()="Contact us"]')
//     await page.waitForTimeout(4000)
// })



// let context=await browser.newContext()
//     let page=await context.newPage()
//     await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")

//    await page.click('(//a [@class="atJtCj Qum9aC"])[1]')
   
// })
//  test.only("tab",async({browser})=>{
//     let context=await browser.newContext()
//      let page=await context.newPage()
//      await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
     
//      await page.click('(//a [@class="atJtCj Qum9aC"])[1]')


//  })

// test.only("tab",async({browser})=>{
//     let context=await browser.newContext()
//      let page=await context.newPage()
//      await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
//      let[page2]=await Promise.all([
//         page.waitForEvent('popup'),
//        page.click('(//a [@class="atJtCj Qum9aC"])[1]')])
//        //await page.waitForTimeout(3000)
//        console.log(await page.url());
//        await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
       
     

//  })

test.only("tab",async({browser})=>{
    let context=await browser.newContext()
     let page=await context.newPage()
     await page.goto("https://www.redbus.in/")
     let[page2]=await Promise.all([
        page.waitForEvent('popup'),
     page.click('//a[text()="Contact us"]')])
     await page2.click('//span[text()="Account"]')
})