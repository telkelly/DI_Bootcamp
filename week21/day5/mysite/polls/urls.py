from django.urls import path

from polls import views

urlpatterns = [
    path('', views.index, name='index'),
    path('say-hi/<name>/<int:age>', views.say_hi, name='say_hi'),
]
