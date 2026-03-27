import { test} from "@playwright/test"
import excel from 'exceljs'
import path from "path"

test("read single data",async({page})=>{

    // read single data

    let book =new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=await book.getWorksheet("Sheet1")
   // let data=await sheet.getRow(1).getCell(1).value //value used whwn we get the excart value

    let data=await sheet.getRow(1).getCell(1).toString()    // === tostring() used when we convert all data to string
    console.log(data);

})

// print row wise

test ("read multiple data",async({page})=>{
      let book =new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=await book.getWorksheet("Sheet2")
    for(let row=1;row<=sheet.actualRowCount;row++){
        for(let c=1;c<=sheet.actualColumnCount;c++){
            let data=sheet.getRow(row).getCell(c).toString()
            console.log(data);
            
        }
    }

})

//print column wise

test("read multiple data column wise",async({page})=>{
      let book =new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=await book.getWorksheet("Sheet2")
    for(let c=1;c<=sheet.actualColumnCount;c++){
    for(let row=1;row<=sheet.actualRowCount;row++){
        
            let data=sheet.getRow(row).getCell(c).toString()
            console.log(data);
            
        }
    }
})

//launch the url using excel data..nd pass single..nd..multiple  data

test.only("pass testdata to the app",async({page})=>{
      let book =new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/exceldata.xlsx"))
    let sheet=await book.getWorksheet("Sheet3")
    let alldata=[]
    for(let r=1;r<=sheet.actualRowCount;r++){
        let row=sheet.getRow(r)
        let url=row.getCell(1).toString()
        let un=row.getCell(2).toString()
        let pass=row.getCell(3).toString()
        alldata.push({url:url,un:un,pass:pass})


    }
console.log(alldata);
for(let d of alldata){
    await page.goto(d.url)
    await page.waitForTimeout(3000)
    await page.getByRole("link",{name:"CRM"}).click()
    let p2=page.waitForEvent("popup")
    await page.getByRole("link",{name:" Small CRM"}).click()
    let page2=await p2
    await page2.getByRole("link",{name:"Admin"}).click()
    await page2.locator("#txtusername").fill(d.un)
    await page2.locator("#txtpassword").fill(d.pass)
     await page2.getByRole("button",{name:"Login"}).click()
     await page2.getByRole("link",{name:"Admin"}).click()
await page2.close()
await page.waitForTimeout(3000)

}

 

    }

)
