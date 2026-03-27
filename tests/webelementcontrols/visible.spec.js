import {test} from "@playwright/test"
test("fill",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    //await page.locator('//input[@id="phone"]').waitFor()

    //==visible

    // let a=await page.locator('//input[@id="phone"]').isVisible()
    // console.log(a);


    //===enabled

    //  let a=await page.locator('//input[@id="phone"]').isEnabled()
    // console.log(a);

    //====ischecked
      await page.locator("//input[@id='male']").click()
    let a=await page.locator("//input[@id='male']").isChecked()
    console.log(a);
    

    

})