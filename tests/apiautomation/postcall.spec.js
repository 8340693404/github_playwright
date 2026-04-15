import{test,expect} from '@playwright/test';
test('Post call test',async ({request})=>{


   // let response = await request.post('https://restful-booker.herokuapp.com/auth',{headers:{'Content-Type':'application/json'},data:{username:'admin',password:'password123'}});

//==or

let authdata = {username:'admin',password:'password123'};
let response1 = await request.post('https://restful-booker.herokuapp.com/auth',{headers:{'Content-Type':'application/json'},data:authdata});

console.log(response1.status());    //status code
console.log(await response1.json()); //response body in json format

})

test.only('Post call test1',async ({request})=>{



let bookingdata= {"firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"};

let response1 = await request.post('https://restful-booker.herokuapp.com/booking',{headers:{'Content-Type':'application/json'},data:bookingdata});

console.log(response1.status());    //status code
let respjson = await response1.json(); //response body in json format
console.log(respjson);
//console.log(respjson.bookingid);
expect(response1.status()).toBe(200);
expect(respjson.bookingid).not.toBeNull();
expect(respjson.booking.firstname).toBe(bookingdata.firstname);




})