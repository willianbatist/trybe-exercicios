// sort ordena por default pela ordem do alfabeto.
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
// console.log(food);

// Para ordenar numeros é preciso fazer essa função, para mudar para decrescente basta mudar => b - a; 
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
// console.log(points);

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente 
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
people.sort((a, b) => b.age - a.age);
  
console.log(people);