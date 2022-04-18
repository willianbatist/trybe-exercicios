const { expect } = require('chai');

const handleValidationNumber = require('../soma');

describe('Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":', () => {
  it('Positivo"', () => {
    const response = handleValidationNumber(1);
    expect(response).equals("Positivo")
  });
  it("Negativo", () => {
    const response = handleValidationNumber(-1);
    console.log('entrou', response);
    expect(response).equals("Negativo")
  });
  it("Neutro", () => {
    const response = handleValidationNumber(0);
    expect(response).equals("Neutro")
  });
  it("O Resultado é uma String", () => {
    const response = handleValidationNumber(2);
    expect(response).a("string")
  });
});