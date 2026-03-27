import {expect, test} from "@playwright/test"
import path from "node:path"
import fs from "fs"

 test("download",async({page})=>{ 
// await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
// await page.locator('//textarea[@name="textarea"]').fill("hello")
// await page.locator("#fileName").fill("newfile.txt") //it is used the change the file name
// let[download1]=await Promise.all([
//     page.waitForEvent("download"),
//     page.getByRole("button",{name:'Download'}).click()])
// await download1.saveAs(`downloadedfile/${download1.suggestedFilename()}`);  //save the download file
// let fileName = download1.suggestedFilename();
// console.log(fileName);
// const path = await download1.path();
// console.log(path);


// download file in desktop

// await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
// await page.locator('//textarea[@name="textarea"]').fill("hello")
// await page.locator("#fileName").fill("newfile.txt") //it is used the change the file name
// let[downloadfile]=await Promise.all([
//     page.waitForEvent("download"),
//     page.getByRole("button",{name:'Download'}).click()])

//     let downloadfolder="C:/Users/ASUS/Desktop/downloadfile"
//     let filename=downloadfile.suggestedFilename()
//     await downloadfile.saveAs(path.join(downloadfolder,filename))
//     await page.waitForTimeout(3000)


//======without using promise.all()=======

await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.locator('//textarea[@name="textarea"]').fill("hello")
await page.locator("#fileName").fill("newfile.txt") //it is used the change the file name

    let download=page.waitForEvent("download")
   await page.getByRole("button",{name:'Download'}).click()
   let downloadfile=await download

    let downloadfolder="C:/Users/ASUS/Desktop/downloadfile"
    let filename=downloadfile.suggestedFilename()
    let fullpath=path.join(downloadfolder,filename)
    await downloadfile.saveAs(path.join(downloadfolder,filename))
    await page.waitForTimeout(3000)

    //for verify
    if(fs.existsSync(fullpath)){
        console.log(`file exist:${fullpath}`);
    
    }
    else {
        console.log(`no such file exists`);
        
    }
 })