import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BaseAuthComponent } from './base-auth/base-auth.component';
const routes: Routes = [
  {
    path: '',
    component: BaseAuthComponent,
    children: [ 
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },    
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
