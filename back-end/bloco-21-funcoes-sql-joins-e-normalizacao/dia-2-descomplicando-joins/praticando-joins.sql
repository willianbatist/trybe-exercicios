#1. praticando INNER JOIN
# 1.1 usando as tabelas actor e film_actor;
SELECT a.actor_id, a.first_name, a.last_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

# 1.2 Use as tabelas staff e address/ nome , email , id do endereço , endereço e distrito
SELECT s.first_name, s.email, s.address_id, ad.address, ad.district
FROM sakila.staff AS s
INNER JOIN sakila.address AS ad
ON s.address_id = ad.address_id;