from django.shortcuts import render
from django.http import HttpResponse

def about(request):
    about_text = "Welcome to our website! This is a brief about us."
    return HttpResponse(about_text)