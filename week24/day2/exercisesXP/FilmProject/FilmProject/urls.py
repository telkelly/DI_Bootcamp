from django.contrib import admin
from django.urls import path, include

urlpatterns = [
   path('admin/', admin.site.urls),
   path('films/', include('films.urls')),
   path('film/', include('films.urls')),
   path('director/', include('films.urls')),
   path('accounts/', include('accounts.urls')),
]

