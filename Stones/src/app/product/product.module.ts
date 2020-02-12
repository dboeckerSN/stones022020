import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { NettoPipe } from './netto.pipe';
import { ProductFormComponent } from './product-form/product-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductDisplayComponent,
    NettoPipe,
    ProductFormComponent,
    ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    ProductDisplayComponent,
    ProductFormComponent
  ]
})
export class ProductModule { }
