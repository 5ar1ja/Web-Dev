from django.contrib import admin
from .models import Company, Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'address')  # Fields to display in the list view
    search_fields = ('name', 'city')  # Add search functionality

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'salary')  # Fields to display
    list_filter = ('company',)  # Add filters
    search_fields = ('name',)  # Add search