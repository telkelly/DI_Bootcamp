import random
import requests
import sqlite3

response = requests.get('https://restcountries.com/v3.1/all').json()
conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS countries (
                  id INTEGER PRIMARY KEY,
                  name CHAR(200),
                  capital CHAR(150),
                  flag JSON,
                  subregion CHAR(150),
                  population INT
               )''')

if response:
    for country in range(10):
        choose_ran = random.choice(response)
        cursor.execute("INSERT INTO countries (name, capital, flag, subregion, population) VALUES (?, ?, ?, ?, ?)",
                       (choose_ran['name']['common'], choose_ran['capital'][0], choose_ran['flag'], choose_ran['region'], choose_ran['population']))
        conn.commit()

    # Close the connection after all records have been inserted
    conn.close()
else:
    print("Failed to retrieve data from the API.")

# Open a new connection for the SELECT statement
conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM countries")
rows = cursor.fetchall()

for row in rows:
    print(row)

# Close the connection
conn.close()
