from django.urls import path
from .views import HomePageView, DirectorCreateView, FilmCreateView

urlpatterns = [
    path('homepage/', HomePageView.as_view(), name='homepage'),
    path('add_director/', DirectorCreateView.as_view(), name='create_director'),
    path('add_film/', FilmCreateView.as_view(), name='create_film'),
]