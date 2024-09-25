import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    NgxMatSelectSearchModule,
    CurrencyMaskModule 
  ]
})
export class SharedModule { }
