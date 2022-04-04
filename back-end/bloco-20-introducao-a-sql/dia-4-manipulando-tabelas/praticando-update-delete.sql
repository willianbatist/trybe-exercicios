select * from sakila.actor;
# inserindo novos nomes
INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Willian', 'Alves Batista');

# inseridos dados de uma tabela na outra;
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;

# Insira um novo funcionário na tabela sakila.staff.
select * from sakila.staff;
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Willian', 'Alves Batista', 2, 'willian.alves.b15@gmail.com', 1, 1, 'will', 'theWhiteWolf');
    
# Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Dany', 'Toniato', 3, 'willian.alves.b15@gmail.com', 1, 1, 'Dany', 'dddtoniato'),
    ('Jona', 'Alves', 4, 'willian.alves.b15@gmail.com', 1, 1, 'Jona', 'jjjAlves');
    
# Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer 
# e cadastre essas pessoas como atores na tabela sakila.actor.
select * from sakila.customer limit 5;
select * from sakila.actor;
INSERT INTO sakila.actor (first_name, last_name) # aqui é para onde eu quero jogar as informações
    SELECT first_name, last_name FROM sakila.customer limit 5;

SET SQL_SAFE_UPDATES = 0;
#Update em alguma coluna
SELECT * FROM sakila.staff;
UPDATE sakila.staff
SET first_name = 'Jonata'
WHERE first_name = 'Jona';# aqui coloco aonde vou buscar a informação e que linha ou dar update, não precisava ser first_name pode ser o id.

#update em Massa
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

# Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos 
# e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
SELECT * FROM sakila.film;
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

# 4. 
UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);

#Delete
SELECT * FROM sakila.actor;
DELETE FROM sakila.actor
WHERE actor_id = 201;

