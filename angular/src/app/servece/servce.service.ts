import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';


import{User, Binfo} from './model';
@Injectable({

  providedIn: 'root'
})
export class ServceService {


  noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})};
  constructor(private http:HttpClient) { }

  userRegistration(user:User,fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('_id',user._id);
    formData.append('name',user.name);
    formData.append('role',user.role);
    formData.append('phone',user.phone);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('confirmpassword',user.confirmpassword);

    return this.http.post("http://localhost:2020/userreg",formData,this.noAuthHeader)
  }

  binfoRam(binfo:Binfo,fileToUpload: File){
    const formData: FormData = new FormData();
  //   formData.append('Image', fileToUpload, fileToUpload.name);
  //   formData.append('_id',user._id);
    formData.append('oname',binfo.oname);
    formData.append('abn',binfo.abn);
    formData.append('address1',binfo.address1);
    formData.append('address2',binfo.address2);
    formData.append('city',binfo.city);
    formData.append('areacode',binfo.areacode);

    return this.http.post("http://localhost:2020/binfos",formData,this.noAuthHeader)
  }

  userLogin(user:User){
    return this.http.post("http://localhost:2020/login",user,this.noAuthHeader)
  }

  jwtget(){
    return this.http.get("http://localhost:2020/jwt");
  }
}
