from random import randint 
size(1000,800)

def makeCar(x,y, name=":-)", color1="",color2=""):
    #This functions creates a drawn car with 5 parameters
    #x and y are coordinates (numeric)
    #name will be text displayed on the car (string)
    #color1 and color2 will change the colors of parts of the car (string)
    #a random color is used if a preset is not given ("red","blue","green","black","white")
    
    #Presetting colors
    red = color(225,0,0)
    blue = color(0,0,225)
    green = color(0,225,0)
    black = color(0,0,0)
    white = color(225,225,225)
    
    #Checking color1
    if color1=="red":
        color1=red
    elif color1=="blue":
        color1=blue
    elif color1=="green":
        color1=green
    elif color1=="black":
        color1=black
    elif color1=="white":
        color1=white
    else:
        #Setting random color is not given a preset
        color1=color(randint(0,225),randint(0,225),randint(0,225))
    
    #Checking color2
    if color2=="red":
        color2=red
    elif color2=="blue":
        color2=blue
    elif color2=="green":
        color2=green
    elif color2=="black":
        color2=black
    elif color2=="white":
        color2=white
    else:
        #Setting random color is not given a preset
        color2=color(randint(0,225),randint(0,225),randint(0,225))
    
    #Wheels
    fill(color1) #Fills everything after it with this color
    ellipse(52+x,56+y,70,26)
    ellipse(52+x,191+y,70,26)
    ellipse(256+x,83+y,70,26)
    ellipse(255+x,180+y,70,26)
    rect(251+x,80+y,11,103)
    
    #Body
    fill(color2)
    triangle(282+x,131+y,50+x,60+y,44+x,194+y)
    
    #Number Text
    fill(225, 255, 0)
    textSize(25)
    text(name,115+x,145+y)
    
    #Seat
    fill(140, 232, 255)
    ellipse(91+x,125+y,50,88)
    
makeCar(50,20,"#10","black","red")
makeCar(200,200,"gucci mane","green","blue")