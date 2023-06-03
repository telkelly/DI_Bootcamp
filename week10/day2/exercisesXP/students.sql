CREATE TABLE students(
	id serial primary key,
	first_name varchar(100) not null,
	last_name varchar(100) not null,
	birth_date date not null
)



SELECT * FROM students WHERE birth_date >= '2000-01-01'

INSERT INTO students(first_name, last_name, birth_date)
VALUES('Marc', 'Benichou', '1998-11-02'),
		('Yoan', 'Cohen', '2010-12-02'),
		('Lea', 'Benichou', '1987-07-27'),
		('Amelia', 'Dux', '1996-04-07'),
		('David', 'Grez', '2003-06-16'),
		('Omer', 'Simpson', '1980-10-03')