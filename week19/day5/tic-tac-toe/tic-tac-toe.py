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

# check for win or tie

def checkHorizontle(board):
    global winner
    if board[0] == board[1] == board[2] != "_":
        winner = board[0]
        return True
    elif board[3] == board[4] == board[5] != "_":
        winner = board[3]
        return True
    elif board[5] == board[6] == board[7] != "_":
        winner = board[5]
        return True


def checkVerticale(board):
    global winner
    if board[0] == board[3] == board[6] and board[0] != "_":
        winner = board[0]
        return True
    elif board[1] == board[4] == board[7] and board[1] != "_":
        winner = board[1]
        return True
    elif board[2] == board[5] == board[8] and board[2] != "_":
        winner = board[2]
        return True

def checkDiagonal(board):
    global winner
    if board[0] == board[4] == board[8] and board[0] != "_":
        winner = board[0]
        return True
    elif board[2] == board[4] == board[6] and board[2] != "_":
        winner = board[1]
        return True

def checkTie(board):
    global gameRunning
    if "_" not in board:
        printBoard(board)
        print("It's a tie")
        gameRunning = False

def switchPlayer(board):
    global current_player
    if current_player == "X":
        print("Player O's turn")
        current_player = "O"
    else:
        print("Player X's turn")
        current_player = "X"

def checkForWin():
    global gameRunning
    if checkDiagonal(board) or checkHorizontle(board) or checkVerticale(board):
        print(f"The winner in {winner}")
        gameRunning = False


# start the game
while gameRunning:
    printBoard(board)
    playerInput(board)
    checkForWin()
    checkTie(board)
    switchPlayer(board)
