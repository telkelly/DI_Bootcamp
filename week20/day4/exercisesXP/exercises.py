# exercise-1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal=Bengal('Pipi', 2)
charteux = Chartreux('Chani', 5)
siamese = Siamese('Coco', 10)

all_cats = [bengal, charteux, siamese]

sara_pets = Pets(all_cats)

sara_pets.walk()

# exercise-2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight/self.age*10)

    def fight(self, other_dog):
        if self.weight and self.run_speed() > other_dog.weight and other_dog.run_speed():
            return print(f"{self.name} is win {other_dog.name}")
        return print(f"{other_dog.name} is win {self.name}")

barbie = Dog("Barbie", 3, 20)
john = Dog("John", 10, 50)
edvard = Dog("Edvard", 6, 70)
john.fight(barbie)
barbie.fight(edvard)
edvard.fight(john)



