import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  public product: Product = new Product(12, 'Granitstein Gravo', 134.56, 12);

  constructor() { }

  ngOnInit() {
  }

  public raisePrice(): void {
    this.product.price += 5;
    alert('Aktueller preis: ' + this.product.price);
  }
}
