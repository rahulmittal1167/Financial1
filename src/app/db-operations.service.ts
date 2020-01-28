import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DbOperationsService {


  url:string="http://127.0.0.1:5000/user1/";
  constructor( private http:Http) { }

  getItem(id)
  {
    return this.http.get(this.url+id).map(
      (response:any)=>response
    )
 
  }

  postUser(myform)
  {
    console.log(myform);
    return this.http.get(this.url+"add?user_data="+JSON.stringify({"name": "rahul", "email": "ra"}))
    .map((response:any)=>response)
  }
  
}
