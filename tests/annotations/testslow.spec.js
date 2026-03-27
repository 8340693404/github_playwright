import {test} from '@playwright/test'
test("test 1" ,async({page})=>{
    test.slow()
    console.log("test 1");
    
})
test("test 2" ,async()=>{
    console.log("test 2");
    
})
test("test 3" ,async()=>{
    console.log("test 3");
    
})
