// 1 - Dada uma matriz, transforme em um array.
const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
// junção de string o concat faz a junção de string.
function flatten() {
  return arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual));
};
console.log(flatten());
