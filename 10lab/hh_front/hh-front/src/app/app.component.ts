// app.component.ts
import { Component } from '@angular/core';
import { CompanyListComponent } from './components/company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompanyListComponent], // Убираем HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
}