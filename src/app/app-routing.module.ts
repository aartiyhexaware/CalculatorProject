import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 import { AuthGuard } from './guards/auth.guard';
 import { LoginComponent } from './login/login.component';
 import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
     { path: '', component: HomeComponent, canActivate: [AuthGuard] },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },

    // otherwise redirect to homev
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
