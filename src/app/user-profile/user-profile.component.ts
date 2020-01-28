import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { RestService } from 'app/rest.service';
import { DbOperationsService } from 'app/db-operations.service';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form;


  

  
  constructor(private db: DbOperationsService) {

   }

  ngOnInit() {

    this.form=new FormGroup(
      {
   
        // id:new FormControl(""),
         fname:new FormControl(""),
         email:new FormControl(""),
        
     

      })
  }

  // onSubmit(myform)
  // {

  //   console.log(myform);
  //   this.rs.postUser(myform)
  //   .subscribe(
  //     (response:any)=>{
  //       console.log('put successfully')
  //       alert("hello");
  //       this.form.reset();
  //     }

  //   )

  // }
  onSubmit(formdata){
    console.log(formdata)
    this.db.postUser(JSON.stringify(formdata))
        .subscribe((response : any)=>{
          
        })
  }




}
