import {test,expect} from '@playwright/test';   
test('Get call test',async ({request})=>{
    let response = await request.get('https://jsonplaceholder.typicode.com/posts/1');


    //let respbody = await response.body();
    //console.log(respbody);

//====to capture the response body we need to use json() method and it will return the response body in json format

   let respjson = await response.json();
    //console.log(respjson);


//==to capture the headers we need to use headers() method and it will return the headers in json format
    //let respheaders = response.headers();
   // console.log(respheaders);   


//====caputre all headers in array format we need to use headersArray() method and it will return the headers in array format

   //let respheardersarray = response.headersArray();
   //console.log(respheardersarray);


//===for status code we can use status() method and it will return the status code of the response

    //let respstatus = response.status();
    ////console.log(respstatus);  

 //==for validate the status code we can use expect() method and it will validate the status code of the response

    //expect(response.status()).toBe(200);   

    

//==for status text we can use statusText() method and it will return the status text of the response

    //let respstatustext = response.statusText();
    //console.log(respstatustext);     
    

    //expect(response.statusText()).toBe('OK');

    
  expect (respjson).toHaveProperty("userId", 1);
    

})
    