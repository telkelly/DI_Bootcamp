import random
import string
from datetime import datetime
from datetime import date
from faker import Faker

# exercise-1
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __add__(self, other):
        if isinstance(other, (int, float)):
            return self.amount + other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        else:
            raise ValueError("Unsupported operand types for +")

    def __iadd__(self, other):
        if isinstance(other, (int, float)):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        else:
            raise ValueError("Unsupported operand types for +=")
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))

print(int(c1))

print(repr(c1))

print(c1 + 5)

print(c1 + c2)

c1 += 5
print(c1)

c1 += c2
print(c1)


# print(c1+c3)

# exercise-3

def ran_nums(num):
    fortune_num = random.randint(1, 100)
    if num == fortune_num:
        return print(f"Your number is {num} and random number is {fortune_num}. Success!")
    return print(f"Your number is {num} and random number is {fortune_num}. You are not lucky")


ran_nums(10)


# exercise-4
def ran_str():
    allowed_characters = string.ascii_letters
    random_string = ''.join(random.choice(allowed_characters) for _ in range(5))
    return print(random_string)


ran_str()


# exercise-5

def get_time():
    return datetime.now()


print(get_time())


# exercise-6

def until_jan():
    date_now = datetime.now()
    january_1st = datetime(date_now.year + 1, 1, 1)
    time_difference = january_1st - date_now
    days = time_difference.days
    hours, remainder = divmod(time_difference.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    return f"The 1st January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours"


print(until_jan())


# exercise-7
def minutes_of_life():
    date_now = date(datetime.now().year, datetime.now().month, datetime.now().day)
    birth_day = date(2000, 2, 24)
    time_difference = date_now - birth_day
    minutes = time_difference.days * 24 * 60
    return print(f"I live {minutes} minutes")

minutes_of_life()

# exercise-8

users = []
fake = Faker()

def add_user():
    for _ in range(1, 10):
        users.append({'name': fake.name(),
                    'address': fake.address(),
                    'language_code': fake.language_code()})
    return users

print(add_user())