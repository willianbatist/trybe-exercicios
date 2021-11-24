// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...numeros) => numeros.reduce(((acumulador, valorAtual) => acumulador + valorAtual),0);
