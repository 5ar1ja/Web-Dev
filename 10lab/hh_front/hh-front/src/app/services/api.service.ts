// api.service.ts (complete with all necessary methods)

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Company endpoints
  getCompanies(): Observable<Company[]> {
    console.log('Fetching companies from API...');
    return this.http.get<Company[]>(`${this.apiUrl}/companies/`)
        .pipe(catchError(this.handleError));
    }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/${id}/`)
      .pipe(catchError(this.handleError));
  }

  // Vacancy endpoints
  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/companies/${companyId}/vacancies/`)
      .pipe(catchError(this.handleError));
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}/vacancies/${id}/`)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.status === 0) {
      errorMessage = 'Network error: Please check your internet connection';
    } else if (error.status >= 400 && error.status < 500) {
      errorMessage = `Client error: ${error.error?.detail || error.message}`;
    } else if (error.status >= 500) {
      errorMessage = `Server error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}