import{test,expect} from '@playwright/test';
test('Update call test',async ({request})=>{
    let authdata = {username:'admin',password:'password123'};
let response1 = await request.post('https://restful-booker.herokuapp.com/auth',{headers:{'Content-Type':'application/json'},data:authdata});


//get the token

let jsonresponse = await response1.json();
let authtoken = jsonresponse.token;     //token is generated after successful authentication and we can use this token for further operations like update, delete etc. which requires authentication. We need to pass this token in the header of the request for those operations.


console.log("TOKEN IS "+authtoken);


let newbookingdata= {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}

// get the bookingid

let newresponse=await request.post('https://restful-booker.herokuapp.com/booking',{headers:{'Content-Type':'application/json'},data:newbookingdata});
let newjsonresponse = await newresponse.json();
console.log(newjsonresponse);

let bookingid = newjsonresponse.bookingid;
console.log("Booking id is "+bookingid);    //we can use this booking id for further operations like update, delete etc. which requires booking id. We need to pass this booking id in the url of the request for those operations.
// let updateddata= {
//     "firstname" : "virat",
//     "lastname" : "kholi",
//     "totalprice" : 1112,
//     "depositpaid" : false,
//     "bookingdates" : {
//         "checkin" : "2018-05-01",
//         "checkout" : "2019-03-01"
//     },
//     "additionalneeds" : "dinner"
// }


//====fulludate using put method

//  let updatedresponse=await request.put('https://restful-booker.herokuapp.com/booking/'+bookingid,{headers:{'Content-Type':'application/json',"Accept":"application/json",'Cookie':"token="+authtoken},data:updateddata});
// let updatedjsonresponse = await updatedresponse.json();
// console.log(updatedjsonresponse);
// expect(updatedresponse.status()).toBe(200);
// expect(updatedjsonresponse.firstname).toBe(updateddata.firstname);


//==partial update using patch method

let updateddatapatch= {
    "firstname" : "rohit",
    "lastname" : "sharma",
  
}

 let updatedresponsepatch=await request.patch('https://restful-booker.herokuapp.com/booking/'+bookingid,{headers:{'Content-Type':'application/json',"Accept":"application/json",'Cookie':"token="+authtoken},data:updateddatapatch});
let updatedjsonresponsepatch = await updatedresponsepatch.json();
console.log(updatedjsonresponsepatch);


})
