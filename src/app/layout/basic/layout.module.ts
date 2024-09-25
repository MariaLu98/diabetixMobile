import { SharedModule } from './../../shared/utils/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BaseComponent,
    TopMenuComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,    
    FormsModule,
  ]
})
export class LayoutModule { }
