import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UserloginComponent} from './userlogin/userlogin.component';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';

import {AuthGuard} from './aouth/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { BinfoComponent } from './binfo/binfo.component';
import { EinfoComponent } from './einfo/einfo.component';
import { PinfoComponent } from './pinfo/pinfo.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'login', component: UserloginComponent },
  { path: 'register', component: UserComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'binfo', component: BinfoComponent },
  { path: 'einfo', component: EinfoComponent },
  { path: 'pinfo', component: PinfoComponent },
  { path: 'otp', component: OtpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
