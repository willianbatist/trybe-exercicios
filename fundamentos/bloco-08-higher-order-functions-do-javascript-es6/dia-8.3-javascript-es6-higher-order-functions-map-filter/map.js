// fazer um array de negativos.
const numbers = [1, 2, 3, 4, -5];
//                                                aqui é if else
const numbersNegativos = numbers.map((number) => (number > 0) ? number * (-1): number); 
// console.log(numbersNegativos);

// juntando arrays
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const juncaoArr = (listaDeProdutos, listaDePrecos) =>  listaDeProdutos.map((produtos, precos) => ({ [produtos]: listaDePrecos[precos]}));
// console.log(juncaoArr(products,prices));

