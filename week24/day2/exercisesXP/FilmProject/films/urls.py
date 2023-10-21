from django.urls import path
from .views import HomePageView, DirectorCreateView, FilmCreateView

urlpatterns = [
    path('homepage/', HomePageView.as_view(), name='homepage'),
    path('addFilm/', FilmCreateView.as_view(), name='addFilm'),
    path('addDirector/', DirectorCreateView.as_view(), name='addDirector')
]