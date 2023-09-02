import requests
from django.shortcuts import HttpResponse
from .models import Country


def fetch_countries(request):
    response = requests.get("https://restcountries.com/v3.1/all")
    countries_data = response.json()[:10]

    for country in countries_data:
        country = Country(name=country["name"]["common"], capital=country.get("capital", ""),
                          population=country.get("populate", 0))
        country.save()
        return HttpResponse("Countries fetched")
