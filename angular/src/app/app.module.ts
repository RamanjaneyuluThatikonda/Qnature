import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import {ServceService} from './servece/servce.service';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './aouth/intersepter';
import {AuthGuard} from './aouth/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BinfoComponent } from './binfo/binfo.component';
import { EinfoComponent } from './einfo/einfo.component';
import { PinfoComponent } from './pinfo/pinfo.component';
import { OtpComponent } from './otp/otp.component'; 



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserloginComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BinfoComponent,
    EinfoComponent,
    PinfoComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
  multi:true},ServceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
