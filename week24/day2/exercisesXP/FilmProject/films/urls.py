from django.urls import path
from .views import HomePageView

urlpatterns = [
    path('homepage/', HomePageView.as_view(), name='homepage'),
]