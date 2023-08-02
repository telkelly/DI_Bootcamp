# exercise-1

eys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

diction = dict(zip(eys, values))

print(diction)

# exercise-2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

sum = 0

for key, value in family.items():
    if value < 3:
        sum += 0
    elif value > 3 and value < 12:
        sum += 10
    elif value > 12:
        sum += 15

print("Total family's cost:", sum)

# bonus
# member = input("Write name of a family member and separate by comma:").split(',')
# age = input("Write age of the family member and separate by comma:").split(',')
#
# added_family = dict(zip(member, age))
# sum2 = 0
#
# for key, value in added_family.items():
#     value = int(value)
#     if value < 3:
#         sum2 += 0
#     elif value > 3 and value < 12:
#         sum2 += 10
#     elif value > 12:
#         sum2 += 15
#
# print(sum2)

# exercise-3

brand ={
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color":{
     "France": "blue",
     "Spain": "red",
     "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2


print(f"Zara's clients are {str(','.join(brand['type_of_clothes']))}")

brand["country_creation"] = "Spain"

if brand["international_competitors"]:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])

print(len(brand))
print(brand.keys())

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print(brand["number_stores"])

# exercise-4

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

#1/

disney_users_A = {}

for idx, elem in enumerate(users):
    disney_users_A[elem] = idx

print(disney_users_A)

#2/

disney_users_B = {}

for idx, elem in enumerate(users):
    disney_users_B[idx] = elem

print(disney_users_B)

#3/

disney_users_C = {}

users.sort()
for idx, elem in enumerate(users):
    disney_users_C[elem] = idx

print(disney_users_C)

#4.1/
new_users = []
disney_users_AA = {}

for user in users:
    if "i" in user:
        new_users.append(user)

for idx, elem in enumerate(new_users):
    disney_users_AA[elem] = idx

print(disney_users_AA)

#4.2/
new_users2 = []
disney_users_AB = {}

for user in users:
    if user.startswith("M") or user.startswith("P"):
        new_users2.append(user)
        print(user)

for idx, elem in enumerate(new_users2):
    disney_users_AB[elem] = idx

print(disney_users_AB)
