from random import randint

#There are many ways of going about creating "Battleship" visually with Processing
#The method I'm employing will utilize a 2D list to keep track of the row and column of
#each point of the "ocean", which will be a 5x5 grid
#I'll randomly place 1 "battleship" on 1 point of the "ocean"
#I'll use the 2D array to create a blue square at each location (spaced out properly) in a
#500x500 window. 
#The user's clicks will be input and the location of each square is checked for being in the
#click area
#If a click is proper, the location on the 2D array is checked for a hit, a repeat, or a miss.
#User has 5 clicks before game ends.
turn=0
board = [] #Stores Raw Data of hits/misses/ship_location

for x in range(5):
    board.append(["O"] * 5)#5 columns of "O" signify blank spot
    #looped 5 times for each row

#Assigning ship location randomly
board[randint(0, len(board) - 1)][randint(0, len(board[0]) - 1)]="S"

def setup():
    size(500,500)
    
def print_board(board):
    background(225,225,225) #Resets background
    x=0 #starting point for column
    for row in board:
        y=0 #Starting point for row
        for column in row:
            if column=="O" or column=="S":
                fill(0,0,225) #If blank or ship located, blue tile1
                rect(x,y,100,100)
            else:
                fill(225,0,0)
                ellipse(x+50,y+50,100,100) #If "shot" alredy, placing red circle
            y+=100 #with every iteration, moving to right 100 units (500pi/5rows)
        x+=100 #with every iteration, moving down 100 units (500pi/5columns)

def mousePressed():
    global turn
    if turn<5:
        turn+=1 #increase turn count every click
        
        #Since entire background filled, any point clicked will be a tile
        #Each tile will be at a position 500/5. The mouse position can likewise be 
        #divided by 100 and rounded to get to nearest tile "point"
        mX=int(mouseX/100)
        mY=int(mouseY/100)
        #Y positioning is a bit backwards! Upper-left corner is 0
        if board[mX][mY]=="S":
            print("You sunk my battleship!")
            background(225,225,225)
            textSize(50)
            text("YOU WIN!",100,250)
        elif board[mX][mY]=="X":
            print("You already guessed that! Lose a turn!")
        elif board[mX][mY]=="O":
            print("You missed! Try again!")
            board[mX][mY]="X" #Recording the miss
            print_board(board) #update board
    if turn > 4:
        #Game ends after 5 failed attempts
        background(225,225,225)
        textSize(50)
        text("GAME OVER!",50,250)

#Printing board every draw cycle
def draw():
   #initializing board
    global board, turn
    if turn < 5:
        print_board(board)