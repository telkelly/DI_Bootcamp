from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Family, Animal

admin.site.register(Family)
admin.site.register(Animal)