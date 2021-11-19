// filter para pegar os numeros par
const numbers = [19, 21, 30, 3, 45, 22, 15, 44];
const verificação = (numbr) => numbr%2 === 0;

const numbersPar = numbers.filter(verificação);

// console.log(numbersPar);

// usando o filter para capturar as pessoas maiores de 18 anos.
const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

const adultos = (arrObjeto) => arrObjeto.filter((pessoas)=>  (pessoas.age < 18));

// console.log(adultos(objPeople));


// Remover um nome da lista.
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const removerEstudante = (name, objetoArr) => objetoArr.filter((estudade) => estudade !== name);

console.log(removerEstudante('Ricardo', arrayMyStudents));