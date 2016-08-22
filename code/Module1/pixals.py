from Myro import *
from Graphics import *

init("sim")

pic = takePicture()
show(pic)
pixels = getPixels(pic)
for p in pixels:
    print(getRed(p))