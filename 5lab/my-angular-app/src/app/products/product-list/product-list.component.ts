// src/app/products/product-list/product-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf and *ngFor
import { ProductItemComponent } from '../product-item/product-item.component'; // Import ProductItemComponent
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent], // Add CommonModule and ProductItemComponent
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products!: Product[]; // Получаем список продуктов от родителя
  @Output() like = new EventEmitter<Product>(); // Передаём продукт
  @Output() remove = new EventEmitter<Product>(); // Передаём продукт

  // Обработка лайка
  onLike(product: Product) {
    this.like.emit(product); // Передаём продукт
  }

  // Обработка удаления
  onRemove(product: Product) {
    this.remove.emit(product); // Передаём продукт
  }
}