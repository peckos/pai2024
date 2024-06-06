import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from "primeng/checkbox";
import { PasswordModule } from "primeng/password";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    CheckboxModule,
    PasswordModule,
    InputTextModule,
    ButtonModule
  ]
})
export class AuthModule { }
