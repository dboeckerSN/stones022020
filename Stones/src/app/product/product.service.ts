import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.api + '/products');
  }

  public saveProduct(product: Product) {
    //this.products.unshift(product);
  }
}
