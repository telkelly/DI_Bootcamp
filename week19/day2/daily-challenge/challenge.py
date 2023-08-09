matrix_string = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

rows = []
row = []


def convertMatrixToStringByColumn(matrix_string):
    matrix_as_list = matrix_string.split("\n")
    columns_letters = []
    for i in range(3):
        for j in range(len(matrix_as_list)):
            columns_letters.append(matrix_as_list[j][i])

    return ''.join(columns_letters)


final_str = convertMatrixToStringByColumn(matrix_string)


def removeNotAlphaLetters(final_str):
    my_finalist = []
    for char in final_str:
        if char.isalpha():
            my_finalist.append(char)
        else:
            if len(my_finalist) != 0 and my_finalist[-1] != " ":
                my_finalist.append(" ")

    return "".join(my_finalist).strip()


removeNotAlphaLetters(final_str)
message = removeNotAlphaLetters(final_str)
print(message)