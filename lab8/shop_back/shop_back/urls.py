from django.contrib import admin
from django.urls import path
from django.http import HttpResponse  # Add this import
from api.views import (ProductList, ProductDetail, 
                      CategoryList, CategoryDetail, 
                      CategoryProductsList)

# Add this view function
def home(request):
    return HttpResponse("""
        <h1>Shop Backend API</h1>
        <h2>Available Endpoints:</h2>
        <ul>
            <li><a href="/admin/">Admin Panel</a></li>
            <li><a href="/api/products/">Products API</a></li>
            <li><a href="/api/categories/">Categories API</a></li>
        </ul>
        <h3>API Documentation:</h3>
        <pre>
        GET /api/products/ - List all products
        GET /api/products/&lt;id&gt;/ - Get single product
        GET /api/categories/ - List all categories
        GET /api/categories/&lt;id&gt;/ - Get single category
        GET /api/categories/&lt;id&gt;/products/ - List products by category
        </pre>
    """)

urlpatterns = [
    path('', home),  # Add this line for the root URL
    path('admin/', admin.site.urls),
    path('api/products/', ProductList.as_view()),
    path('api/products/<int:pk>/', ProductDetail.as_view()),
    path('api/categories/', CategoryList.as_view()),
    path('api/categories/<int:pk>/', CategoryDetail.as_view()),
    path('api/categories/<int:id>/products/', CategoryProductsList.as_view()),
]