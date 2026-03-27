import { test} from "@playwright/test"
import excel from 'exceljs'
import path from "path"

//==write single data  

// test("write data",async({page})=>{    
//     let book =new excel.Workbook()
//         await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
//         let sheet=await book.getWorksheet("Sheet5")
//         if(!sheet){                                 // if sheet is not there then we addsheet
//             sheet=book.addWorksheet("Sheet5")
//         }
//         sheet.getRow(1).getCell(1).value="hello"
//         await book.xlsx.writeFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))




// })

//==write data==using app===write multiple data

test("write data",async({page})=>{    
    let book =new excel.Workbook()
        await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))
        let sheet=await book.getWorksheet("Sheet6")
        if(!sheet){                                 // if sheet is not there then we addsheet
            sheet=book.addWorksheet("Sheet6")
        }
        await page.goto("https://www.amazon.in/")
        await page.locator("input#twotabsearchtextbox").fill("shoes")
        await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
        let allopt=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
        console.log(allopt);
        for(let text of allopt){
           let i= allopt.indexOf(text)
            sheet.getRow(i+1).getCell(1).value=text
        }
        


        await book.xlsx.writeFile(path.join(__dirname, "../../testdata/exceldata.xlsx"))




})