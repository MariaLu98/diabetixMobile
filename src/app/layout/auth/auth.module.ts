import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BaseAuthComponent } from './base-auth/base-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/utils/shared.module';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BaseAuthComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    RxReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
