class Farm:
    def __init__(self, name_of_farm):
        self.name = name_of_farm
        self.animals = {}

    def add_animal(self, animal, quantity=1):
        if animal in self.animals.keys():
            self.animals[animal] = quantity + 1
        else:
            self.animals[animal] = quantity

    def get_info(self):
        text = (f"{self.name}\n")
        text += (f"{self.animals}")
        return text

    def get_animal_types(self):
         return self.animals.keys()


    def get_short_info(self):
        return print(f"{self.name} farm has {', '.join(self.get_animal_types())}")

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
macdonald.get_short_info()



