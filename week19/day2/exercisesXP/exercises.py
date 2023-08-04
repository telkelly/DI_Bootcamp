import random

# exercise-1
def display_message():
    print("I learned a lot during this course most of it is basic python")

display_message()

# exercise-2
def favorite_book(title):
    print(f"One of me favorite book is {title}")

favorite_book("Harry Potter")

# exercise-3

def describe_city(name, country = "Israel"):
    print(f"{name} is in {country}")

describe_city("Haifa")

# exercise-4

def random_number(number):
    random_num = random.randint(1, 100)
    if random_num == number:
        print(f"Success --> random number is {random_num} and yours {number}")
    else:
        print(f"NO SUCCESS --> random number is {random_num} and yours {number}")

random_number(5)

# exercise-5

def make_shirt(size="L", msg="I love Python"):
    print(f"The size of the shirt is {size} and the text is {msg}")

make_shirt("S", "Don't be pussy, be a kitty")
make_shirt()

# exercise-6

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magician(list):
    for i in list:
        print(i)

show_magician(magician_names)

def make_great(list):
    for i in list:
        print(f"the Great {i}")

make_great(magician_names)