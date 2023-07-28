# challenge-1
import random

word = input("Give me a 10 character word:")

if len(word) < 10:
    print('string not long enough')
elif len(word) > 10:
    print('string too long')
else:
    print('perfect string')
    print(word[0], 'and ', word[-1])

    for i in range(1, len(word)+1):
        print(word[:i])

