import {test} from '@playwright/test'
test.fixme("test 1" ,async({page})=>{
    await page.goto("url")
    console.log("test 1");
    
})
test("test 2" ,async()=>{
    console.log("test 2");
    
})
test("test 3" ,async()=>{
    console.log("test 3");
    
})
