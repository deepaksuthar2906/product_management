import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' }, // Default redirect to 'product'
    { 
      path: 'product', 
      loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) 
    },
];
