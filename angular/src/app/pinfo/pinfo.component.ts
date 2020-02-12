import { Component, OnInit } from '@angular/core';
import {ServceService} from '../servece/servce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css'],
  providers:[ServceService]
})
export class PinfoComponent implements OnInit {

  constructor(private Service:ServceService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  movetoeinfo(){
    this._router.navigate(['../einfo'], {relativeTo:this._activatedRoute});
  }

}
