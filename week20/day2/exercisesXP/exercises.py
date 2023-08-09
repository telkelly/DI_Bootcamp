# exercise-1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat('Lecsy', 5)
cat2 = Cat('Chaki', 2)
cat3 = Cat('Josh', 9)

cats = [cat1.age, cat2.age, cat3.age]
def define_age(cats):
    oldest = max(cats)
    return oldest

print(define_age(cats))

# exercise-2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


davids_dog = Dog("Rex", 50)

print("name --> ", davids_dog.name, "height --> ", davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)

print("name --> ", sarahs_dog.name, "height --> ", sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if(sarahs_dog.height > davids_dog.height):
    print(f"{sarahs_dog.name} is bigger")
print(f"{davids_dog.name} is bigger")

# exercise-3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for i in self.lyrics:
            print(i)


stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# exercise-4

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        return self.animals.append(new_animal)

    def get_animal(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        return self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = {}

        for animal in sorted(self.animals):
            first_letter = animal[0].upper()
            if first_letter not in sorted_animals:
                sorted_animals[first_letter] = [animal]
            else:
                sorted_animals.append(animal)

        return sorted_animals

    def get_groups(self):
        return print(self.sort_animals())

ramat_gan_safari = Zoo("Ramat Gan")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Sereja")
ramat_gan_safari.sell_animal("Sereja")
ramat_gan_safari.get_animal()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()