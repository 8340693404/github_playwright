import {test} from "@playwright/test"
test("mouse action doubleclick",async({page})=>{

    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.waitForTimeout(3000)
    // await page.locator("//div[text()='Drag Me']").hover()
    // await page.waitForTimeout(3000)
    // await page.mouse.down()
    // await page.waitForTimeout(3000)
    // await page .mouse.move(200,300)
    // await page.waitForTimeout(3000)
    // await page.mouse.up()

    //drag and drop to trget element

//     await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//     await page.locator('//div[text()="Mobile Charger"]').hover()
//     await page.waitForTimeout(3000)
//     await page.mouse.down()
//     await page.waitForTimeout(6000)
//     await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
//  await page.mouse.up()
//  await page.waitForTimeout(3000)

 //dragdrop by taking element location
   
//  await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//     await page.locator('//div[text()="Mobile Charger"]').hover()
//     await page.waitForTimeout(3000)
//     await page.mouse.down()
//     await page.waitForTimeout(6000)
//     let box=await page.locator('//div[text()="Mobile Accessories"]/parent::div').boundingBox()
//     await page.waitForTimeout(6000)
//    await page.mouse.move(box.x,box.y)
//    await page.waitForTimeout(6000)
//    await page.mouse.up()
//     await page.waitForTimeout(3000)


    //drag to

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    let source=page.locator('//div[text()="Mobile Charger"]')
    let target= page.locator('//div[text()="Mobile Accessories"]/parent::div')
    await page.waitForTimeout(6000)
   await source.dragTo(target)
   await page.waitForTimeout(6000)



    
    
})