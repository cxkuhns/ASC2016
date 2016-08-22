from random import *

def setup():
    size(400,400)
    background(255)

def draw(): 
    x = randrange(5,50)
    color = randrange(0,255)
    noStroke()
    fill(color)
    ellipse(mouseX, mouseY, x,x)
    for i in range(randrange(15)):
        splatX = randrange(-50,50)
        splatY = randrange(-50,50)
        splatSize = randrange(int(x/4), int(x/2))
        ellipse(mouseX+splatX, mouseY+splatY, splatSize,splatSize)
    
        