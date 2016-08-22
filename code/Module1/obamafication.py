from Myro import *

def obamicon(picture):
    for pixel in getPixels(picture):
        gray = getGray(pixel)
        if gray > 182:
            setRGB(pixel, yellow)
        elif gray > 121:
            setRGB(pixel, blue)
        elif gray > 60:
            setRGB(pixel, red)
        else:
            setRGB(pixel, black)
    return picture
    
black = (0, 51, 76)
red = (217, 26, 33)
blue = (112, 150, 158)
yellow = (252, 227, 166)
pic = makePicture(pickAFile())
obamicon(pic)
show(pic)

# from obamicon import *

# show(obamicon(pic))