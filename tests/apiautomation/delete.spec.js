import{test,expect} from '@playwright/test';
test('Delete call test',async ({request})=>{

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
console.log("Booking id is "+bookingid);  


//==for delete call we need to pass the booking id in the url and token in the header of the request

let deleteresp=await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingid,{headers:{'contentType':'application/Json','cookie':'token:'+authtoken}});
console.log(deleteresp.status());
console.log(deleteresp.statusText());

//expect(deleteresp.status()).toBe(201);   //for delete call the status code should be 201





})