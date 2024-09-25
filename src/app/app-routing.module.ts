import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './layout/basic/base/base.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'main',
    component: BaseComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      },     
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/auth/auth.module').then(m => m.AuthModule),
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
