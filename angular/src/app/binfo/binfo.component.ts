import { Component, OnInit } from '@angular/core';
import {ServceService} from '../servece/servce.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-binfo',
  templateUrl: './binfo.component.html',
  styleUrls: ['./binfo.component.css'],
  providers:[ServceService]
})
export class BinfoComponent implements OnInit {

  constructor(private Service:ServceService, private _router: Router,
  private _activatedRoute: ActivatedRoute) { }
  // constructor() { }

  ngOnInit() {
  }

  binfo={
    oname:"",
    abn:"",
    address1:"",
    address2:"",
    city:"",
    areacode:"",
    } 
    // fileToUpload: File = null;
    // handleFileInput(file: FileList) {
    //   this.fileToUpload = file.item(0);
      



movetopinfo() {
this._router.navigate(['../pinfo'], { relativeTo: this._activatedRoute });
}

}
