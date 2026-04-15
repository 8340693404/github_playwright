import{test,expect} from '@playwright/test';
import { request } from 'node:http';
test('health checkup api test',async({request})=>{
    let resp=await request.get('https://restful-booker.herokuapp.com/ping')
    console.log(resp.status());
    console.log(resp.statusText());
    
    
    



})