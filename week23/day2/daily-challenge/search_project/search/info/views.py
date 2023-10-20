from django.shortcuts import render
from .models import Person
from django.http import HttpResponse, Http404


# Create your views here.
def display_person_by_phonenumber(request, number):
    try:
        person = Person.objects.get(phone_number = number)
        return render(request, 'search/person_by_number.html', {'person': person})
    except Person.DoesNotExist:
        raise Http404("Person not found")


def display_person_by_name(request, name):
    try:
        person = Person.objects.get(name = name)
        return render(request, 'search/person_by_name.html', {'person': person})
    except Person.DoesNotExist:
        raise Http404("Person not found")
