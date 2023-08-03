board = ["_", "_", "_",
         "_", "_", "_",
         "_", "_", "_"]

current_player = "X"
winner = None
gameRunning = True


# print the board

def printBoard(board):
    print(board[0] + "|" + board[1] + "|" + board[2])
    print(board[3] + "|" + board[4] + "|" + board[5])
    print(board[6] + "|" + board[7] + "|" + board[8])

# take player input
def playerInput(board):
    inp = int(input("Enter a number 1-9: "))
    if inp >= 1 and inp <= 9 and board[inp - 1] == "_":
        board[inp - 1] = current_player
    else:
        print("Oops player is already on this spot")

# start the game
while gameRunning:
    printBoard(board)
    playerInput(board)
