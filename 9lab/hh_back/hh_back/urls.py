"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from api.views import (
    CompanyListView,
    CompanyDetailView,
    CompanyVacanciesView,
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
    path('', home, name='home'),  # Root URL will show the home page
    path('admin/', admin.site.urls),
    path('api/companies/', CompanyListView.as_view(), name='company-list'),
    path('api/companies/<int:id>/', CompanyDetailView.as_view(), name='company-detail'),
    path('api/companies/<int:id>/vacancies/', CompanyVacanciesView.as_view(), name='company-vacancies'),
    path('api/vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:id>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]