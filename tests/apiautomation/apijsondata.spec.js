import{test,expect} from '@playwright/test';
import fs from 'fs';             // to read the json data from the file and use it in our test case we need to import fs module and use it to read the data from the file and store it in a variable and then we can use that variable in our test case.    


test('using json data',async({request})=>{

    let filedata=fs.readFileSync("./testdata/booking.json");   //where the json data is stored and we need to read that data using fs module and store it in a variable. This will return the data in buffer format.



    let booking =JSON.parse(filedata);       //to read the data in json format we need to use JSON.parse() method and pass the buffer data as an argument and it will return the data in json format and we can use this data for our test case.    


    let resp=await request.post('https://restful-booker.herokuapp.com/booking',
        {
            headers:{'Content-Type':'application/json'},

        data:booking
})

let respjson = await resp.json();
console.log(respjson);

//validate the response
expect(resp.status()).toBe(200);    

expect(respjson.bookingid).not.toBeNull();
expect(respjson.booking.firstname).toBe(booking.firstname);




    
})