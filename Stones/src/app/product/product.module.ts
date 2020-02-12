import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { NettoPipe } from './netto.pipe';
import { MatCardModule } from '@angular/material/card';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [ProductDisplayComponent, NettoPipe, ProductFormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [ProductDisplayComponent]
})
export class ProductModule { }
