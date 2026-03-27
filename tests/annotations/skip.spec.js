
import {test} from '@playwright/test'
// test("test 1" ,async({page})=>{
//     console.log("test 1");
    
// })
// test.skip("test 2" ,async()=>{
//     console.log("test 2");
    
// })
// test("test 3" ,async()=>{
//     console.log("test 3");
    
// })

test("test 1" ,async({page})=>{
    console.log("test 1");
    
})
test("test 2" ,async({browserName})=>{
    test.skip(browserName=="firefox")
    console.log("test 2");
    
})
test("test 3" ,async()=>{
    console.log("test 3");
    
})

