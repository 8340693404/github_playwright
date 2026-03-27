import {test} from '@playwright/test'
// test.fail("test 1" ,async({page})=>{
//     console.log("test 1");
    
// })
// test

// ("test 2" ,async()=>{
//     console.log("test 2");
    
// })
// test("test 3" ,async()=>{
//     console.log("test 3");
    
// })

test.fail("test 1" ,async({page})=>{
    //console.log("test 1");
    await page.goto("url")
    
})
test("test 2" ,async()=>{
    console.log("test 2");
    
})
test("test 3" ,async()=>{
    console.log("test 3");
    
})
