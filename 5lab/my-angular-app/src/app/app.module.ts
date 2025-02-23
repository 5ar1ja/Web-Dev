// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'; // Import ProductsComponent

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent // Declare ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule // Add RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}