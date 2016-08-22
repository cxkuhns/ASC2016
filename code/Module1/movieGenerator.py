from random import *

lst1 = ["Revenge Of The", "Trials Of The", "The Adventures Of The", "The Journey Of The", "The Army Of The",
        "Return Of The", "Uprising Of The", "The Downfall Of The", "The Lost Tales Of The" , "The Ancient Tombs Of The"]
lst2 = ["Killer","Ultimate", "Wild", "Time Travelling", "Laser Shooting", 
        "Cave Dwelling", "Glowing", "Crime Stopping", "Dastardly", "Evil"]
lst3 = ["Nanobots", "Cyclops", "Sharks", "Spies", "Speed Racers", 
        "Base Jumpers", "AI Pods", "CIA Agents", "Dinosaurs", "Goblins"]
        
        
i = 0
while i < len(lst1):
    print(i+1 , ". " , lst1[randrange(10)] , " " , lst2[randrange(10)] , " " , lst3[randrange(10)])
    i = i + 1