import { Component, OnInit } from '@angular/core';
import {ServceService} from '../servece/servce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-einfo',
  templateUrl: './einfo.component.html',
  styleUrls: ['./einfo.component.css'],
  providers: [ServceService]
})
export class EinfoComponent implements OnInit {

  constructor(private Service:ServceService, private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
    
  
    ngOnInit() {
    }
  
  
  movetootp() {
  this._router.navigate(['../otp'], { relativeTo: this._activatedRoute });
  }

}
