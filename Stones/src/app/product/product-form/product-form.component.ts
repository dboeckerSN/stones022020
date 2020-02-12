import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../product-display/custom-validator';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl(),
    weight: new FormControl()
  });

  public nameLength = 0;

  constructor(private pService: ProductService) { }

  ngOnInit() {
    this.productForm.get('name').valueChanges.subscribe(
      (name: string) => this.nameLength = name.length
    );
  }

  save() {
    this.pService.saveProduct({id: 1 , ...this.productForm.value});
    /*
    this.pService.saveProduct({
      id: 1,
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      weight: this.productForm.get('weight').value,
    });*/
  }
}
