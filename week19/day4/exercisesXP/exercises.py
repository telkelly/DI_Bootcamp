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

#main()

# exercise-2

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    random.shuffle(data)

    for question_data in data:
        question = question_data["question"]
        answer = question_data["answer"]

        user_answer = input(question + " Write your answer: ")

        if user_answer.lower() == answer.lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append((question, user_answer, answer))

    print("Quiz completed.")
    print(f"Number of correct answers: {correct_answers}")
    print(f"Number of incorrect answers: {incorrect_answers}")

    if incorrect_answers > 3:
        print("You had more than 3 wrong answers. Please play again.")
        print("Wrong answers and correct answers:")

        for question, user_answer, correct_answer in wrong_answers:
            print(f"Question: {question}")
            print(f"Your Answer: {user_answer}")
            print(f"Correct Answer: {correct_answer}")
            print()

ask_questions()

# exercise-3