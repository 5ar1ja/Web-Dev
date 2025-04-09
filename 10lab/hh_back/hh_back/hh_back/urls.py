from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from api.views import (
    company_list,
    company_detail,
    company_vacancies,
    VacancyListView,
    VacancyDetailView,
    TopTenVacanciesView
)

def home(request):
    return HttpResponse("""
        <h1>Welcome to HeadHunter Backend</h1>
        <ul>
            <li><a href="/admin/">Admin Site</a></li>
            <li><a href="/api/companies/">Companies API</a></li>
            <li><a href="/api/vacancies/">Vacancies API</a></li>
            <li><a href="/api/vacancies/top_ten/">Top 10 Vacancies API</a></li>
        </ul>
    """)

urlpatterns = [
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('api/companies/', company_list, name='company-list'),
    path('api/companies/<int:id>/', company_detail, name='company-detail'),
    path('api/companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),
    path('api/vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:id>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]