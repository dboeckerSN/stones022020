import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../product-display/custom-validator';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() public saveProduct = new EventEmitter<Product>();

  public productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl(),
    weight: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.saveProduct.emit({id: 1 , ...this.productForm.value});
    /*
    this.saveProduct.emit({
      id: 1,
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      weight: this.productForm.get('weight').value,
    });*/
  }
}
