from Myro import *

sim = Simulation("Empty Room", 750, 500, makeColor("green"))
sim.setup()
makeRobot("SimScribbler",sim)

##AYE AYE AYE AYE AYE AYE AYE AYE AYE

## Letter D - Nate

def curve():
    turnBy(180,"deg")
    forward(10,0.5)
    turnBy(180, "deg")
    turnBy(90, "deg")
    penDown()
    forward(1, 3.125)
    turnBy(-90, "deg")
    ##motors(1, .0000000005, 9.5)
    motors(1, .00000000009, 9.75)
    turnBy(190, "deg")
    forward(10, 0.45)
curve()


##Letter A - Andy

def letter_a():
    penDown("blue")
    motors(0, 4, 6.25)
    turnBy(165, "deg")
    forward(10, .0875)
    motors(0, 1, 4)
    ##turnBy(45, "deg")
    forward(1,1)
letter_a()


##Letter R - Joey
turnLeft(1,2.5)
penDown()
forward(1,3)
motors(0,0.5)
wait(10)
forward(1,1)
backward(1,1)
motors(0,-0.5)
wait(10)
motors(0.25,0)
wait(10)
forward(1,.1)
##Letter E - Carlos    


forward(1,3)
turnBy(90, "deg")
motors(0,1,17)  