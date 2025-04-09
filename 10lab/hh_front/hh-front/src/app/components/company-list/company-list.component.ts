// company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Company } from '../../models/company';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyVacanciesComponent } from '../company-vacancies/company-vacancies.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CompanyVacanciesComponent], // Убираем HttpClientModule
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.isLoading = true;
    this.error = null;
    
    this.apiService.getCompanies().subscribe({
      next: (data) => {
        console.log('Companies fetched:', data);
        this.companies = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching companies:', err);
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

  showVacancies(companyId: number): void {
    this.selectedCompanyId = companyId;
  }

  clearSelection(): void {
    this.selectedCompanyId = null;
  }
}