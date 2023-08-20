from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def say_hi(request, name, age):
    return HttpResponse(f"Hi {name}, my age after 5 years is {age + 5}")
