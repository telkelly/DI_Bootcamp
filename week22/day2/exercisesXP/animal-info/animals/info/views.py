from django.shortcuts import render
from .data import animals
from .models import Animal, Family


# Create your views here.
def display_all_animals(request):
    all_animals = Animal.objects.all()
    context = {'animals': all_animals}
    return render(request, 'animals/all_animals.html', {'data': context})


def display_all_families(request):
    all_families = Family.objects.all()
    context = {'families': all_families}
    return render(request, 'animals/all_families.html', {'data': context})


def display_one_animal(request, animal_id):
    animal = None
    for entry in animals:
        if entry.get('id') == animal_id:
            animal = entry
            break
    return render(request, 'animals/animal.html', {'animal': animal})


def display_animal_per_family(request, family_id):
    match_animals = []
    for entry in animals:
        if entry.get('family') == family_id:
            match_animals.append(entry)
            break

    return render(request, 'animals/animals_in_family.html', {'animal': match_animals})
