import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() public saveProduct = new EventEmitter<Product>();

  public productForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    weight: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.saveProduct.emit({id: 1 , ...this.productForm.value});
  }
}
