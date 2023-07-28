# list1 = [5,10,15,20,25,50,20]
# print(list1)
#
# if 20 in list1:
#     index = list1.index(20)
#     list1[index]=200
#     print(list1)
#
# a_turple = (10,20,30,40)
#
# a,b,c,d = a_turple

num = int(input("Enter a number: "))
for i in range(1, num + 1):
        result = num * i
        print(f"{num} x {i} = {result}")
