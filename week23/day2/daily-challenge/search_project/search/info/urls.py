from django.urls import path
from . import views

urlpatterns = [
    path('person/<str:number>', views.display_person_by_phonenumber, name = 'display-by-number'),
    path('person/<str:name>', views.display_person_by_name, name = 'display-by-name'),
]
