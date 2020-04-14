import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { NewProductComponent } from './components/profile/newProduct/newProduct.component';


const appRoutes:  Routes = [
  {
  path:'login',
  component: LoginComponent,
  //canActivate: [BeforeLoginService]
  },

  {
  path:'signup',
  component: SignupComponent
  },

  //Modulo Produto
  {
  path:'profile',
  component: ProfileComponent,
  //canActivate: [AfterLoginService]
  },
  {
  path:'profile/new',
  component: NewProductComponent,
  //canActivate: [AfterLoginService]
  },

  {
  path:'request-reset',
  component: RequestResetComponent
  },
  {
  path:'response-reset',
  component: ResponseResetComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
