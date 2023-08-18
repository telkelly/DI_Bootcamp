# exercise-3

from exercises import Dog

class PetDog(Dog):
    def __init__(self, name):
        self.name = name
        self.trained = False

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *names):
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            print(f"{self.name} does a barrel roll")
            print(f"{self.name} stands on his back legs")
            print(f"{self.name} shakes your hand")
            print(f"{self.name} plays dead")


elic = PetDog("Elic")
elic.train()
elic.do_a_trick()
elic.play("Kevin", 'Rex', "Bani")
