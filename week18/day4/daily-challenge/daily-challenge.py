# challenge-1
#
# num = int(input("Give me a number:"))
# length = int(input("Give me a length:"))
#
# new_arr = []
#
# for i in range(1, length + 1):
#     new_arr.append(i*num)
#
# print(f"number: {num} - length {length} - {new_arr}")

# challenge-2

users_str = input("Write me a word:")

new_one = ""
prev_char = None

for letter in users_str:
    if letter != prev_char:
        new_one += letter
        prev_char = letter

print(f"user's word: {users_str} ➞ {new_one}")
