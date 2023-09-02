from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('fetch-countries/', views.fetch_countries, name="fetch-countries"),
    # path('countries/', include('countries.urls'))
]
