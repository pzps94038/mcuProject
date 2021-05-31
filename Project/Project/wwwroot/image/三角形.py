for i in range(1,8):
    if i<=4:
        for j in range(1,i+1):
            print("A",end="")
        print()
    else:
        for j in range(8,i,-1):
            print("A",end="")
        print()
        
            