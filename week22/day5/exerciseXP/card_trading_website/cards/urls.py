from django.urls import include, path
from . import views

urlpatterns = [
    path('all-cards/', views.display_all_cards, name='all-cards'),
]