// src/app/products/products.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf and *ngFor
import { ProductListComponent } from './product-list/product-list.component'; // Import ProductListComponent
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent], // Add ProductListComponent
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products: Product[] = [];
}