# exercise-1
import random

list = []


def get_words_from_file(file):
    my_file = open(file).readlines()
    for i in my_file:
        list.append(i.replace('\n', ''))
    return list


get_words_from_file('sowpods.txt')


def get_random_sentence(length):
    new_sent = []
    for _ in range(length):
        rn = random.choice(list)
        new_sent.append(rn)

    return ' '.join(str(i) for i in new_sent)




def main():
    print('The program prints random sentence with no sense. You need give to program length of the sentence')
    value = int(input('Write the length(between 2 and 20): '))
    while value <= 2 or value >= 20:
        value = int(input('Write the length(between 2 and 20): '))
    return print(get_random_sentence(value))

main()