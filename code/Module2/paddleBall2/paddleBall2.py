ballX = 300
ballY = 100
xSpeed = 3
ySpeed = 3
def setup():
    size(500, 500)
    fill(255, 0, 0)


def draw():
    global ballX, ballY, xSpeed, ySpeed
    background(255)
    ellipse(ballX, ballY, 20, 20)
    ballX += xSpeed
    ballY += ySpeed
    
    if ballX > 490 or ballX < 10:
        xSpeed *= -1
    if ballY > 490 or ballY < 10:
        ySpeed *= -1
        
    rect(mouseX - 50, 450, 100, 20)
    if ballX > mouseX - 50 and ballX < mouseX + 50:
        if ballY > 450 and ballY < 460:
            ySpeed *= -1
    


