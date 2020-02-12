import { Component, OnInit } from '@angular/core';
import{ServceService} from '../servece/servce.service';
import { ActivatedRoute, Router } from '@angular/router';

import{User} from '../servece/model';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers:[ServceService]
})
export class UserloginComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessagesEmail: string;
  serverErrorMessagesPassword: string;


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
  login(Emp:string){

    this.Service.userLogin(this.user).subscribe((data:any)=>{
        localStorage.setItem('userToken',data.token);
      this._router.navigate(['/home']);
      },
      (err)=>{
        if(err.status===421){
          this.serverErrorMessagesEmail = "email is wrong";
        }
        else if(err.status===420){
          this.serverErrorMessagesPassword = "password is wrong";
        }
      }
    )
  }
  // movetoregister() {
  //   this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  // }
  

}
