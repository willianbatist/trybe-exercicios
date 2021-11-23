const books = require('./books');
// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
  const todasIdades = books.length;
  const maiorIdade = books.reduce((acumulador, valorAtual) => ( acumulador + (valorAtual.releaseYear - valorAtual.author.birthYear)),0);
  return maiorIdade / todasIdades;
}
console.log(averageAge());