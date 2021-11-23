const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [apresentacao, funcaoSaudacao] = saudacoes;
// saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
// funcaoSaudacao(apresentacao);

// 2 ------
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log(numerosPares); // [6, 8, 10, 12];

// As virgulas usadas serviram para pular os indices do array.
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];