import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthTemplateComponent } from './components/templates/auth-template/auth-template.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterTypeSwitchComponent } from './components/register-type-switch/register-type-switch.component';


@NgModule({
  declarations: [
    AuthTemplateComponent,
    LoginComponent,
    RegisterComponent,
    RegisterTypeSwitchComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
