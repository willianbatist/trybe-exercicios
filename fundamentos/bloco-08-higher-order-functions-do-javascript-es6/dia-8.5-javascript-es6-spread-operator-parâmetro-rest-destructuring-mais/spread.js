const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];
// junção de array criando um novo. O MESMO VALE PARA OBJETO.
const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

// usando spread como parametro de função.
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
// console.log(imc(...patientInfo));


// Também pode ser usada em funções prontas do JS. nesse caso para saber o maior e menor numero do Array
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40, 5];
// console.log(Math.max(...randomNumbers));
// console.log(Math.min(...randomNumbers));

//PARA FIXAR.
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Abacati', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Banana', 'Leite'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];
console.log(fruitSalad(specialFruit, additionalItens));