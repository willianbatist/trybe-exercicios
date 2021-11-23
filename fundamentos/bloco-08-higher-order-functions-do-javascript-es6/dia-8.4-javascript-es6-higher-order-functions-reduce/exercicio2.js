const books = require('./books');
// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  let autoresBooks = books.reduce((acumulador, valorAtual, index, array) => {
    if (index === array.length -1) return `${acumulador} ${valorAtual.author.name}`;
    return `${acumulador} ${valorAtual.author.name},`;
  }, '');
  return autoresBooks.trim();
}
console.log(reduceNames());