import random
class Game:
    def __init__(self):
        self.choice_list = ['r', 'p', 's']
        self.users_choice = ''
        self.computers_choice = ''
        self.scores = {'win': 0,
                  'loss': 0,
                  'draw': 0}

    def get_user_item(self):
        while True:
            self.users_choice = input('Choice an item: (r)ock, (p)aper or (s)cissors ): ')
            if self.users_choice in self.choice_list:
                return self.users_choice
            else:
                return print("No answer. Choice an item: (r)ock, (p)aper or (s)cissors.")

    def get_computer_item(self):
        return random.choice(self.choice_list)

    def get_game_result(self):
        if self.users_choice == 'r' and self.computers_choice == 's' or self.users_choice == 'p' and self.computers_choice == 'r' or self.users_choice == 's' and self.computers_choice == 'p':
            self.scores['win'] += 1
            return print(f"You selected {self.users_choice}. The computer selected {self.computers_choice}. You win")
        elif self.users_choice == self.computers_choice:
            self.scores['draw'] += 1
            return print(f"You selected {self.users_choice}. The computer selected {self.computers_choice}. You drew!")
        else:
            self.scores['loss'] += 1
            return print(f"You selected {self.users_choice}. The computer selected {self.computers_choice}. You lose")

    def play(self):
        self.get_user_item()
        self.computers_choice = self.get_computer_item()
        self.get_game_result()
