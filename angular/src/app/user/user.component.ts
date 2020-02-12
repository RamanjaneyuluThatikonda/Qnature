import { Component, OnInit } from '@angular/core';
import {ServceService} from '../servece/servce.service';
import { ActivatedRoute, Router } from '@angular/router';

import{User} from '../servece/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[ServceService]
})
export class UserComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessagesDE: string;
  serverErrorMessagesPN: string;

  constructor(private Service:ServceService, private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  user={
    _id:"",
    name:"",
    role:"",
    phone:"",
    email:"",
    password:"",
    confirmpassword:"",
    } 
    fileToUpload: File = null;
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
      
    }

register(User:string){
  this.Service.userRegistration(this.user,this.fileToUpload).subscribe(
    res => {
      this._router.navigate(['/binfo']);
    },
    err => {
      if (err.status === 422) {
        // this.serverErrorMessages = err.error.join('<br/>');
        this.serverErrorMessagesDE = "This email adress is already exist";
      }
     else if(err.status===423){
      this.serverErrorMessagesPN = "Password was not match";
     }
    }
  )
}


// movetologin() {
// this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
// }


}