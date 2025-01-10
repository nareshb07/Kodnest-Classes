# first pattern in python

#             * * * * *
#             * * * * *
#             * * * * *
#             * * * * *
#             * * * * *

rows = 5
columns = 5

for i in range(rows):
    for j in range(columns):
        print('*', end=' ')
    print()


#             Second pattern in python

#             1 1 1 1 1 
#             2 2 2 2 2
#             3 3 3 3 3
#             4 4 4 4 4




for i in range(1, rows+1):
    for j in range(columns):
        print(i, end = " ")
    print()


#            Third pattern in python

#             *
#             * *
#             * * *
#             * * * *
#             * * * * *


for i in range(1, rows+1): 
    for j in range(i):
        print('*', end=' ')
    print() 


#            Fourth pattern in python

#             1
#             1 2
#             1 2 3
#             1 2 3 4
#             1 2 3 4 5

for i in range(1,rows+1):
    for j in range(1,i+1):
        print(j, end=' ')
    print()

print("Fifth pattern in python")
#            Fifth pattern in python

#             1
#             2 2
#             3 3 3
#             4 4 4 4
#             5 5 5 5 5

for i in range(1,rows+1):
    for j in range(1,i+1):
        print(i, end=' ')
    print()



#            Sixth pattern in python

#             * * * * *
#             * * * *
#             * * *
#             * *
#             *

print("Sixth pattern in python")

for i in range(rows,0,-1):
    for j in range(i):
        print('*', end = " ")
    print()


#            Seventh pattern in python

#             1 2 3 4 5
#             1 2 3 4
#             1 2 3
#             1 2
#             1

print("Seventh pattern in python")


for i in range(5,0,-1):
    for j in range(1,i+1):
        print(j, end = " ")
    print()


#            Eighth pattern in python

#                *
#               * *
#              * * *
#             * * * *            
#            * * * * *

print("Eighth pattern in python")

for i in range(1,rows+1):
    for j in range(rows-i):
        print(end = " ")
    for j in range(0,i):
        print('*', end = ' ')
    print()
    

#            Ninth pattern in python

#             * * * * *
#              * * * *
#               * * *
#                * *
#                 *

print("Ninth pattern in python")


for i in range(rows, 0, -1):
    for j in range(rows-i):
        print(end = " ")
    for j in range(i):
        print('*', end = ' ')
    print()
    


#            Tenth pattern in python

#                *
#               * *
#              * * *
#             * * * *            
#            * * * * *
#             * * * *
#              * * *
#               * *
#                *


print("Tenth pattern in python")

for i in range(1,rows+1):
    for j in range(rows-i):
        print(end = " ")
    for j in range(0,i):
        print('*', end = ' ')
    print()
for i in range(rows-1,0,-1):
    for j in range(rows-i):
        print(end = " ")
    for j in range(i):
        print('*', end = ' ')
    print()



print("Tenth pattern in python - Aproach 2")

for i in range(1,rows+1):
    print ((rows-i)*' ' + (i * '* '))
    
for i in range(rows-1, 0, -1):
    print ((rows-i)*' ' + (i * '* '))


#            Eleventh pattern in python

#            *
#            * *
#            * * *
#            * * * *
#            * * * * *
#            * * * *
#            * * *
#            * *
#            *


print("Eleventh pattern in python - Aproach 1")

for i in range(i,rows+1):
    print(i * "* ")
for i in range(rows-1,0,-1):
    print(i * "* ")


print("Eleventh pattern in python - Aproach 2")

for i in range(rows):
    for j in range(i+1):
        print('*', end=' ')
    print()
for i in range(rows-1,0,-1):
    for j in range(i):
        print('*', end=' ')
    print()


