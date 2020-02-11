import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentProduct: Product = new Product(12, 'Granitstein Gravo', 134.56, 12);

  public onPriceChange(price: number): void {
    alert('Neuer Preis' + price + ' x ' + this.parentProduct.price);
  }

  public changePrice(price: number) {
    this.parentProduct.price = Number(price);
  }
}
