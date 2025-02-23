// src/app/products/product-item/product-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf and *ngFor
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule], // Add CommonModule
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product; // Ensure this is present
  @Output() like = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  onLike() {
    this.like.emit();
  }

  onRemove() {
    this.remove.emit();
  }
}