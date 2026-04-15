import {expect, test} from "@playwright/test"
import path from "node:path"
 test("notification",async({page})=>{ 

// ==upload single file

// await page .goto("https://testautomationpractice.blogspot.com/")
// await page.locator('#singleFileInput').setInputFiles("C:/Users/ASUS/Desktop/playwright/tests/windowhandle/uploadfiles/pic.jpg")
// await page.waitForTimeout(3000)
// await page.getByRole("button",{name:'Upload Single File'}).click()
// await page.waitForTimeout(3000)


// ==upload multiple files==

// await page .goto("https://testautomationpractice.blogspot.com/")
// await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/ASUS/Desktop/playwright/tests/windowhandle/uploadfiles/pic1.jpg","C:/Users/ASUS/Desktop/playwright/tests/windowhandle/uploadfiles/pic.jpg"])
// await page.waitForTimeout(3000)
// await page.getByRole("button",{name:'Upload Multiple Files'}).click()
// await page.waitForTimeout(3000)


//upload a file using directory

// await page .goto("https://testautomationpractice.blogspot.com/")
// await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../../tests/windowhandle/uploadfiles/pic.jpg"))
// await page.waitForTimeout(3000)
// await page.getByRole("button",{name:'Upload Single File'}).click()
// await page.waitForTimeout(3000)

//upload a file present in local system==or==desktop

// await page .goto("https://testautomationpractice.blogspot.com/")
// await page.locator('#singleFileInput').setInputFiles("C:/Users/ASUS/Desktop/pic.jpg")  //path of file present in desktop..nd..change \ to /.
// await page.waitForTimeout(3000)

//..if upload multiple file from desktop
//setInputFiles(["",""])..write path of file

// await page.getByRole("button",{name:'Upload Single File'}).click()
// await page.waitForTimeout(3000)

//==remove the attached/selected file

await page .goto("https://testautomationpractice.blogspot.com/")
 await page.locator('#singleFileInput').setInputFiles("C:/Users/ASUS/Desktop/playwright/tests/windowhandle/uploadfiles/pic.jpg")
 await page.waitForTimeout(3000)
 await page.locator('#singleFileInput').setInputFiles([])  //with the help of empty array.[]..remove the selected file
 await page.waitForTimeout(3000)


 })