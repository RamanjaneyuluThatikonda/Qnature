import { Component, OnInit } from '@angular/core';
import {ServceService} from '../servece/servce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
  providers:[ServceService]
})
export class OtpComponent implements OnInit {

  constructor(private Server:ServceService, private _router: Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  // movetootp(){
  //   this._router.navigate(['../otp'], {relativeTo:this._activatedRoute});
  // }

  movetologin() {
    this._router.navigate(['../login'], {relativeTo:this._activatedRoute});
  }

}
