from django.shortcuts import render
from .data import animals


# Create your views here.
def my_view(request):
    return render(request, 'animals/animal.html', {'data': animals})
