//product form component
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalApiService } from '../../../services/local-api.service';import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [ MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
  ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  productForm: FormGroup;
  slug: number = 0;
  buttonText:string = ''
  constructor(private fb: FormBuilder, private apiService: LocalApiService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      inStock: [true],
    });
  }

 async ngOnInit(){
    const route: any = this.activatedRoute?.snapshot?.params;
    this.slug = route?.slug;
    if (this.slug > 0) {
      this.buttonText = 'Update Product';
    await this.getUpdateData(this.slug); 
    }else{
      this.buttonText = 'Add Product';
    }
  }
  onSubmit() {
    if (this.productForm.valid) {
      if(this.slug > 0){
        const numId = Number(this.slug);
        this.apiService.updateProduct(numId,this.productForm.value);
        this.router.navigateByUrl('/product');
        this.productForm.reset();
      }else{
        this.apiService.addProduct(this.productForm.value);
        this.router.navigateByUrl('/product')
        this.productForm.reset();
      }
     

    }
  }
  onBack(){
    this.router.navigateByUrl('/product');
  }
  async getUpdateData(id : number){
    const numId = Number(id);
    const res = await this.apiService.getProductById(numId);
    
    if (!res) {
      console.error(`Product with ID ${numId} not found`);
      return;
    }
    
    this.productForm.patchValue({
      name: res?.name || '',
      price: res?.price || 0,
      category: res?.category || '',
      inStock: res?.inStock || false,
    });
  }
}
