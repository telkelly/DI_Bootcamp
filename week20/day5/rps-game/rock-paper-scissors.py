from game import Game


class RockPaperScissors(Game):
    def __init__(self):
        self.user_choice = ''

    def get_user_menu_choice(self):
        self.user_choice = input(
            "Hey, it's Rock Paper Scissors game! Let's start? (p)lay a new game, (s)how scores, (q)uit: ")
        return self.user_choice

    def print_results(self, results):
        return print(f"Win: {results['win']}, Loss: {results['loss']}, Draw: {results['draw']}")

    def main(self):
        game = Game()
        while True:
            self.get_user_menu_choice()
            if self.user_choice == 'p':
                game.play()
            elif self.user_choice == 's':
                self.print_results(game.scores)

new = RockPaperScissors()
new.main()
