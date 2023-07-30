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

# for i in range(1, 21):
#     print(i)
#
# num=[]
# for i in range(1, 21):
#     num.append(i)
#     print(num)
#
# for i in num:
#     if num.index(i)  % 2 == 0:
#         print(i)

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

# family_members = int(input("Enter the number of family members: "))
# total_cost = 0
#
# for _ in range(family_members):
#     age = int(input("Enter the age of the person: "))
#
#     if age < 3:
#         ticket_price = 0
#     elif 3 <= age <= 12:
#         ticket_price = 10
#     else:
#         ticket_price = 15
#
#     total_cost += ticket_price
#
# print("Total cost for the family's tickets:", total_cost)
#
# teenagers = ["Alice", "Bob", "Charlie", "David", "Emma"]
# teenagers_allowed = []
#
# for teen in teenagers:
#     age = int(input(f"Enter the age of {teen}: "))
#     if 16 <= age <= 21:
#         teenagers_allowed.append(teen)
#
# print("Final list of teenagers allowed to watch the movie:", teenagers_allowed)


# exercise-10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")

print("\nAll orders have been prepared:")
for sandwich in finished_sandwiches:
    print(sandwich)
