//service for signal state management

import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../product-model/product';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }

  // Signal for the product list
  private products = signal<Product[]>([]);
  //unique id for each item
  private productId = signal(1);

//return product list
 get productList() {
    return this.products.asReadonly();
  }
//to add a new product
addNewProduct(product: Omit<Product, 'id'>) {
  const newProduct: Product = { ...product, id: this.productId() };
  this.products.update((list) => [...list, newProduct]);
  this.productId.update((id) => id + 1);
}

//to update product details
updateProduct(id: number, updatedProduct: Partial<Product>) {
  this.products.update((list) =>
    list.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    )
  );
}

  //to delete a product
  deleteProduct(productId: number) {
    this.products.update((list) => list.filter((product) => product.id !== productId));
  }

  //to toggle stock
  toggleStock(productId: number) {
    this.products.update((list) =>
      list.map((product) =>
        product.id === productId ? { ...product, inStock: !product.inStock } : product
      )
    );
  }
  getById(productId: number): Product | undefined {
    return this.products().find((product) => product.id === productId);
  }

}
