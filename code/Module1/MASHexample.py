from random import *

questions=["How much money do you want to make?","What quality do you want your wife to have?"]
money=["$100","$2mil","$.01"]
wife=["nice","beautiful","cool","humble"]
outcomes=[money, wife]

def pickOutcome(question,outcomes):
    ans=raw_input(question)
    #50/50 chance of picking user input or randomly from my list
    if (randint(1,2)==1):
        output=outcomes[randint(0,len(outcomes)-1)]
    else:
        output=ans
    return output

outputList=[]
    
for i in range(len(questions)):
    outputList.append(pickOutcome(questions[i], outcomes[i]))

#Home pick is not dependent on the player    
mash = ["mansion","apartment","shack","house"]
varHome=mash[randint(0,len(mash)-1)]
print("You're going to live in a(n) " + varHome)

outTexts=["Every year, you will make ","Your wife will be "]

for i in range(len(outputList)):
    print(outTexts[i]+outputList[i])