# challenge-1

#word = input("Write several words separated by comma: ").split(',')
#sorted_l = ','.join(sorted(word))

#print(sorted_l)

# challenge-2

def longest_word(sentence):
    sent_list = sentence.split(' ')
    longest = max(sent_list, key=len)
    return longest

print(longest_word("Forgetfulness is by all means powerless!"))
