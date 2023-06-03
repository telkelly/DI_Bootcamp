SELECT * FROM film

SELECT first_name || ' ' || last_name AS full_name FROM customer

SELECT DISTINCT create_date FROM customer

SELECT * FROM customer ORDER BY first_name

SELECT film_id, title, description, release_year, rental_rate  FROM film ORDER BY rental_rate

SELECT address, phone FROM address WHERE district = 'Texas'

SELECT * FROM film WHERE film_id=15 OR film_id=150

SELECT * FROM film WHERE title = 'Harry Potter'

SELECT * FROM film WHERE title LIKE 'Ha%'

SELECT * FROM film ORDER BY replacement_cost LIMIT 10

SELECT * FROM FILM ORDER BY replacement_cost FETCH FIRST 10 ROWS ONLY

SELECT c.first_name, c.last_name, p.amount, p.payment_date FROM customer c JOIN payment p ON c.customer_id = p.customer_id ORDER BY c.customer_id

SELECT city.city, country.country FROM city JOIN country ON city.country_id = country.country_id;
