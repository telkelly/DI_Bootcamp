from game import Game
class RockPaperScissors(Game):
    def __init__(self):
        self.user_choice = ''

    def get_user_menu_choice(self):
        self.user_choice = input("Hey, it's Rock Paper Scissors game! Let's start? (p)lay a new game, (s)how scores, (q)uit")
        return self.user_choice
        # if user_choice == 'p':
        #     Game.play()
        # elif user_choice == 's'
        #     self.print_results(res)
        # return print("Bye Bye")

