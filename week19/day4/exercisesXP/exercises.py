# exercise-1
import random
def get_random_temp(season):
    if season == 12 or season <= 2:
         return random.randint(-10, 16)
    elif season >= 9 and season <= 11:
        return random.randint(16, 23)
    elif season >= 3 and season <= 5:
         return random.randint(24, 32)
    else:
        return random.randint(32, 40)

def main():
    season = int(input("Write your month: "))
    random_temp = get_random_temp(season)
    print(random_temp)
    if random_temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif random_temp > 0 and random_temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif random_temp > 16 and random_temp < 23:
        print("Warm and nice!")
    elif random_temp > 24 and random_temp < 32:
        print("Wear your sunscreen it's quit hot there")
    elif random_temp > 32 and random_temp < 40:
        print("It's boiling! Don't forget to drink more water")
    print(f"The temperature right now is {random_temp} degrees Celsius.")



main()