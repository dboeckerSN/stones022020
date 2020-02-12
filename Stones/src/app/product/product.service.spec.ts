import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from './product';

describe('ProductService', () => {
  let service: ProductService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new ProductService();
  });

  it('should add passed in product to product list', () => {
    const product = new Product(1, 'name', 111, 122);

    service.saveProduct(product);

    expect(service.getList()[0]).toEqual(product);
  });
});
