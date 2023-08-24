import random
class Game:
    def __init__(self):
        self.users_choice = input('Choice an item: (r)ock, (p)aper or (s)cissors ): ')
        self.computers_choice = ''

    def get_user_item(self):
        while not self.users_choice:
            self.users_choice
        return self.users_choice

    def get_computer_item(self):
        random_list = ['r', 'p', 's']
        return random.choice(random_list)

    def get_game_result(self):
        if self.users_choice == 'r' and self.computers_choice == 's' or self.users_choice == 'p' and self.computers_choice == 'r' or self.users_choice == 's' and self.computers_choice == 'p':
            return print(f"You selected {self.users_choice}. The computer selected {self.computers_choice}. You win")
        elif self.users_choice == self.computers_choice:
            return print(f"You selected {self.users_choice}. The computer selected {self.computers_choice}. You drew!")
        return print(f"You selected {self.users_choice}. The computer selected {self.computers_choice}. You lose")

    def play(self):
        self.get_user_item()
        self.computers_choice = self.get_computer_item()
        self.get_game_result()

game = Game()
game.play()