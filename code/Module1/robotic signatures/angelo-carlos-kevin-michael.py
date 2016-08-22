from Myro import *
sim = Simulation("Empty Room", 500, 500, makeColor("green"))
sim.setup ()
makeRobot("SimScribbler", sim)


# D (Angelo)
def d():
    turnBy(45, "degree")
 # places the robot in the right position to start the letter
    forward(1, 4)
    turnBy(-45, "degree")
 # turns the robot in the next position to draw again
    motors(1, 0, 15.4)
 # this gives the robot certain amount of power on each indiviidual wheel in order to create the curves
    turnBy(180, "degree")
    motors(.5, 1.2, 6)
    turnBy(-45, "deg")
# A (Carlos)
def a():
    motors(0, 10, 2.6)
    turnBy(-23, "deg")
    backward(1, 1.7)
    motors(-2, 2, 1)
    motors(-2, 1 , 2)
    turnBy(90, "deg")
# R (Kevin)
def r():
    motors(0, 1, 5)
    turnBy(-90, "deg")
    forward(1, 1)
    turnBy(-90, "deg")
    motors(0,1,6)

# E (Michael)
def e()
    forward(1,2)
    motors(0,1,4)
    turnBy(60, "deg")
    motors(0,2,3)
    turnBy(40, "deg")
    motors(0,2,3)

d()
a()
r()
e()