//routing module for products
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ProductListingComponent },
  { path: 'add-product/:slug', component: ProductFormComponent },
  { path: 'add-product', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
