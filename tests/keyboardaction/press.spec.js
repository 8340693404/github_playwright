import {test} from "@playwright/test"
test("mouse action doubleclick",async({page})=>{

// press

await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//await page.locator('#name').fill("mithun")

//type

//await page.locator('#name').type("mithun")

//===or===

//await page.type("#name","mithun")

//==or==
//await page.keyboard.type("mithun")
//await page.waitForTimeout(3000)


//inserttext
 await page.locator("#name").click()
await page.keyboard.insertText("mithun")

//up and down

await page.keyboard.down("Space")
await page.keyboard.up("Space")
await page.keyboard.down("R")
await page.keyboard.up("R")
await page.waitForTimeout(4000)

//press

await page.keyboard.press('Tab')
await page.keyboard.type("qwee122@gamil.com")
await page.keyboard.press("Control+A")
await page.keyboard.press("Control+C")
await page.keyboard.press('Tab')
await page.keyboard.press("Control+V")
await page.waitForTimeout(4000)
})

test.only("keyword action",async({page})=>{
    await page.goto("https://www.amazon.in/")
    for(let index = 1; index < 11; index++){
        await page.keyboard.press('ArrowDown')
    }
   
await page.waitForTimeout(4000)
 
for(let index = 1 ; index < 6; index++){
        await page.keyboard.press('ArrowUp')
    }
   
await page.waitForTimeout(4000)


})