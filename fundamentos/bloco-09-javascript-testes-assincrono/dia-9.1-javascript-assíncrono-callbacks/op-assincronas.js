// a função setTimeout . É muito comum que esta função seja utilizada para simular comportamentos assíncronos. OS 2000 é os milissegundos.
// setTimeout(() => {
//     console.log('4 - Comprar parafusos') // Comprar parafusos
//     console.log('5 - Adicionar ao estoque') // Adicionar ao estoque
//   }, 2000);
  
//   console.log('1 - Receber roda'); // 1 - Receber roda
//   console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
//   console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// exercício de fixação
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]
setTimeout(() => console.log(numbers), 3000);