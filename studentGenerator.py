from random import *
students=["Jeffron","Nathaniel","Nate","Joey","Kevin","Darlyn","Ibrahim","Carlos F.","Shu","William","Elijah","Carlos L.","Taric","Andy","Dylan","Angelo","Shamroy","Michael","Sebastian","Jamal"]

ans =""
while len(students)!=0 and ans!="stop":
    x = randint(0,len(students)-1)
    print(students[x])
    front = students[:x]
    end = students[x+1:]
    #print("front",front)
    #print("end",end)
    students = front
    #print("students",students)
    students=students+end
    #print("students",students)
    ans=input("Next")