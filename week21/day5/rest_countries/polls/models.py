from django.db import models

class Country(models.Model):
    name = models.charField(max_length=100)
    capital = models.charField(max_length=100)
    population = models.PositiveIntegerField()
