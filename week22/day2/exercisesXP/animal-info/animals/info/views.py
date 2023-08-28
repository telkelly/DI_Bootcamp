from django.shortcuts import render
from django.http import HttpResponse
from .data import animals

# Create your views here.
def display_all_animals(request):
    all_animals = animals.objects.all()
    context = {'animals': all_animals}
    return render(request, 'animals/all_animals.html', context)