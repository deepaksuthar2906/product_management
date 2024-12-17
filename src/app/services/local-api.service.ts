//service to manage local apis for crud using signal

import { Injectable } from '@angular/core';
import { SignalService } from './signal.service';
import { Product } from '../product-model/product';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  constructor(private signalService: SignalService) {}

  get products$() {
    return this.signalService.productList;
  }

  addProduct(product: Omit<Product, 'id'>) {
    this.signalService.addNewProduct(product);
  }

  updateProduct(id:number,product: Product) {
    this.signalService.updateProduct(id,product);
  }

  deleteProduct(productId: number) {
    this.signalService.deleteProduct(productId);
  }

  toggleStock(productId: number) {
    this.signalService.toggleStock(productId);
  }
  getProductById(id: number) {
    return this.signalService.getById(id);
  }
}
