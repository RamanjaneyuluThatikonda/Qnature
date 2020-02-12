 import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators';

import {Router} from "@angular/router";

import{ServceService} from '../servece/servce.service';

import { nextContext } from '@angular/core/src/render3';

@Injectable()
 export class AuthInterceptor implements HttpInterceptor{

    constructor(private src:ServceService,private router:Router){}

    intercept(req:HttpRequest<any>,next:HttpHandler){

        if(req.headers.get('noauth'))
        return next.handle(req.clone());

        if(localStorage.getItem('userToken')!=null){
            const clondreq=req.clone({
                headers:req.headers.set("Authorization","Beearer "+ localStorage.getItem('userToken'))

            });

            return next.handle(clondreq).pipe(
                tap(
                    event=>{},
                    err=>{
                        if(err.error.auth==false){
                          this.router.navigateByUrl('/login')  
                            
                        }
                    }
                )
            )
    
                            
        }

  
 }
 }