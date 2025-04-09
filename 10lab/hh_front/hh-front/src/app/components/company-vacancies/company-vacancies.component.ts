import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Vacancy } from '../../models/vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-vacancies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnChanges {
  @Input({ required: true }) companyId!: number;
  vacancies: Vacancy[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnChanges(): void {
    this.loadVacancies();
  }

  loadVacancies(): void {
    this.isLoading = true;
    this.error = null;
    
    this.apiService.getCompanyVacancies(this.companyId).subscribe({
      next: (vacancies) => {
        this.vacancies = vacancies;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }
}