import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Observable<Array<Product>>;

  constructor(private pService: ProductService) { }

  ngOnInit() {
    this.products = this.pService.getList();
  }


  public onPriceChange(price: number): void {
    alert('Neuer Preis' + price);
  }

}
