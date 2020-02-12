import { Component, OnInit } from '@angular/core';
import{ServceService} from '../servece/servce.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ServceService]
})
export class HomeComponent implements OnInit {

  constructor(private Service:ServceService,private _router: Router,) { }

  ngOnInit() {
    this.getLOgiDetails();
  }
user:any;
getLOgiDetails(){
    this.Service.jwtget().subscribe((data)=>{
    this.user=data;
    console.log(this.user);
      })
    }
    logout(){
      localStorage.removeItem('userToken');
      this._router.navigate(['/login']);
    
    }
}
