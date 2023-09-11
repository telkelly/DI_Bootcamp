from django.shortcuts import render
from django.views.generic import ListView


class HomePageView(ListView):
    template_name = "homepage.html"

