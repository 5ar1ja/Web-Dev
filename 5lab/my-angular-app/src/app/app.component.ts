// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf and *ngFor
import { RouterOutlet } from '@angular/router'; // For <router-outlet>
import { ProductListComponent } from './products/product-list/product-list.component'; // Import ProductListComponent
import { Product } from './product.model';
import { smartphones } from './data/smartphones'; // Import product data
import { laptops } from './data/laptops';
import { headphones } from './data/headphones';
import { vacuumCleaners } from './data/vacuum-cleaners';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent], // Add ProductListComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Smartphones', 'Laptops', 'Headphones', 'Vacuum Cleaners'];
  selectedCategory: string | null = null;
  products: Product[] = [];

  // Map category names to their respective product arrays
  categoryProducts: { [key: string]: Product[] } = {
    Smartphones: smartphones,
    Laptops: laptops,
    Headphones: headphones,
    'Vacuum Cleaners': vacuumCleaners
  };

  onSelectCategory(category: string) {
    this.selectedCategory = category;
    this.products = this.categoryProducts[category];
  }
  // Обработка лайка
  onLike(product: Product) {
    product.likes++; // Увеличиваем количество лайков
  }

  // Обработка удаления
  onRemove(product: Product) {
    product.likes--; // Уменьшаем количество лайков
  }
}