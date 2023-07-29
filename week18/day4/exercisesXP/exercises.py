# exercise-1

my_fav_numbers = {4, 7, 13, 15, 24}
my_fav_numbers.add(22)
my_fav_numbers.add(99)
my_fav_numbers.remove(7)
friends_fav_numbers = {2, 6, 45, 80.7}
print(my_fav_numbers)
our_fav_numbers = my_fav_numbers | friends_fav_numbers
print(our_fav_numbers)

# exercise-2

my_tuple = (1,2,3,4)
# a tuple is unchangeable and we cannot add to it items after the tuple has been created

# exercise-3

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Kiwi")
apple_count = basket.count("Apples")
basket.clear()
print(basket)
print(apple_count)

#exercise-4

# 1. integer is a complete number and float is a decimal number

# 3.
start = 1.5
stop = 5.5
step = 0.5

float_sequence = []
curr_float = start

while curr_float < stop:
    float_sequence.append(curr_float)
    curr_float+=step

print(float_sequence)

# exercise-5

for i in range(1, 21):
    print(i)

num=[]
for i in range(1, 21):
    num.append(i)
    print(num)

for i in num:
    if num.index(i)  % 2 == 0:
        print(i)

# exercise-6

# name = input("Write my name:")
#
# while(name!="Kelly"):
#     name = input("Write my name:")
#
# print("It's my name")

# exercise-7

# fruits = input("Write your fav fruit or fruits(separate them with single space):")
#
# list_fruits = fruits.split()
#
# fav_fruit = input("Type a name of any fruit:")
#
# for fruit in list_fruits:
#         if fruit == fav_fruit:
#             print("You chose one of your favorite fruits! Enjoy!")
#         else:
#             print("You chose a new fruit. I hope you enjoy")

# exercise-8

# topping = input("Type series of pizza toppings:")
# toppings = []
#
# while True:
#     if topping.lower() == 'quit':
#         break
#     print("We will add that to your pizza")
#     toppings.append(topping)
#     topping = input("Type series of pizza toppings:")
#
# print(f"Your price for pizza is {10 + (len(toppings) * 2.5)}")

# exercise-9

age = int(input("Type your age:"))
family=['John', 'Kevin']
people = []

if age > 3 and age < 12:
    people.append(10)
elif age > 12:
    people.append(15)
elif age < 3:
    people.append(0)

print(people)




# print(f"Your price for pizza is {10 + (len(toppings) * 2.5)}")






