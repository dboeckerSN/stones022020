import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  @Input()
  public product: Product;

  @Output()
  public priceChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public raisePrice(): void {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }
}