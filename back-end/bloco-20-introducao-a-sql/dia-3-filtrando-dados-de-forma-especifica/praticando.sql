select * from PecasFornecedores.Fornecimentos;
# 1.
select name from PecasFornecedores.Pecas where name like 'GR%';

# 2.
select * from PecasFornecedores.Fornecimentos where code = 2;

# 3.
select * from PecasFornecedores.Fornecimentos where Fornecedor like '%N%';

# 4. 
select * from PecasFornecedores.Fornecedores where name like '%LTDA';

#5 .
select count(*) from PecasFornecedores.Fornecedores where name like '%F%';

#6.
select * from PecasFornecedores.Fornecimentos where (Preco > 15 and Preco < 40) order by Fornecedor desc;

#7.
select * from PecasFornecedores.Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';