const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// ver se o numero é par.
const numerosPares = (number) => number%2 === 0;

// somar todos os numeros
const sumPair = (currentValue, number) => currentValue + number;


const sumNumbers = (array) => array.filter(numerosPares).reduce(sumPair);

 console.log(sumNumbers(numbers));
// outra forma de fazer a soma dos numeros pares.
const funcaoPare = numbers.filter(numerosPares);
const getSum = (result, number) => {
    return result + number;
    };
  const sumNumbers1 = funcaoPare.reduce(getSum);
  console.log(sumNumbers1);