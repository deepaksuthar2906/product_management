//product list component
import { Component } from '@angular/core';
import { LocalApiService } from '../../../services/local-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Product } from '../../../product-model/product';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-listing',
 imports: [MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatCardModule, MatTableModule,CommonModule],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent {
  products$;
  dataSource1 = new MatTableDataSource();
  constructor(private apiService: LocalApiService, private router: Router) {
    this.products$ = this.apiService.products$;
    
  }
  get products() {
    return this.apiService.products$;
  }
  displayedColumns = ['name', 'price', 'category', 'inStock', 'actions'];

 

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id);
  }

  toggleStock(id: number) {
    this.apiService.toggleStock(id);
  }
  editProduct(product: Product) {
    this.router.navigateByUrl('/product/add-product/' + product.id);

  }
  addProduct(){
    this.router.navigateByUrl('/product/add-product')
  }
}
