import {test} from "@playwright/test"
import { log } from "node:console"
test("wait for navigation",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.fill("#writeArea","downloading")
    
let[download]= await Promise.all([
    page.waitForEvent('download'),
page.click("#downloadButton")])
console.log(await download.path());



    


})