import {expect, test} from "@playwright/test"
test("frame",async({page})=>{
 await page.goto("https://ui.vision/demo/webtest/frames/")

// //=====print total frames

//let frames=await page.frames()
// console.log(frames.length);

// //print title of frame

// for(let frame of frames){
//     console.log(await frame.title());

    
// }


// by using frame()...name ..nd..url

// let frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
// await frame1.locator('//input[@name="mytext1"]').fill('hhhhhhhh')
// await expect (await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain('hhhhh')


//===framelocator

// let frametext=await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
// await frametext.fill("hhhhhh")
// await page.waitForTimeout(2000)

//by using contentframe

// let frame2=await page.locator('//frame[@src="frame_2.html"]').contentFrame()
// await frame2.locator('//input[@name="mytext2"]').fill('jjjjjj')
// await page.waitForTimeout(2000)

//iframe

let frame3=await page .frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
let button=await frame3.frameLocator('//iframe').locator('//div[@class="ulDsOb" and .="I am a human"]')
await button.click()

await page.waitForTimeout(2000)

})