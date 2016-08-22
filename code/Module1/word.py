from Myro import *

#set up the simulation
sim = Simulation("Empty Room", 500, 500, makeColor("green"))
sim.setup()
makeRobot("SimScribbler", sim)

def p():
    forward(1,.3)
    turnBy(60,"deg")
    forward(1,.5)
    turnBy(-150,"deg")
    forward(1,1.2)
    turnBy(-90,"deg")
    forward(1,.2)
    turnBy(-100,"deg")
    forward(1,1.2)
    turnBy(-100,"deg")
    forward(1,.6)
    turnBy(-100,"deg")
    forward(1,.6)
    turnBy(-80,"deg")
    forward(1,.3)
    turnBy(-145,"deg")
    forward(1,.8)
    turnBy(-15,"deg")
    
def h():
    forward(1,.3)
    turnBy(60,"deg")
    forward(1,.5)
    turnBy(30,"deg")
    forward(1,.8)
    turnBy(180,"deg")
    forward(1,1.5)
    turnBy(150,"deg")
    forward(1,.6)
    turnBy(-110,"deg")
    forward(1,.6)
    turnBy(110,"deg")
    forward(1,.6)
    turnBy(-50,"deg")
    
def i():
    forward(1,.3)
    turnBy(60,"deg")
    forward(1,.4)   
    turnBy(-150,"deg")
    forward(1,1)
    turnBy(135,"deg")
    forward(1,.5)
    turnBy(-60,"deg")    
    

penDown()