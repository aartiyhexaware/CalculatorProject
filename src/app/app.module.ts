import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {jwtInterceptor} from './jwt.Interceptor';
import {ErrorInterceptor } from './error.interceptor';

import {commonService} from './common.service';
import {AlertService} from './alert.service';
import {SimulatedBackendProvider} from './backendInterceptor';
import { AlertComponent } from './alert/alert.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    CalculatorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule 
  ],
  providers: [commonService,AuthGuard,AuthenticationService,AlertService,
    { provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //dummy like we are calling a api 
    SimulatedBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
