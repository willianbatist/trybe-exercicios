const service  = require('./service');

describe('Crie uma função que gere um número aleatório', () => {
  it('Utilize o mock e defina o retorno padrão como 10', () => {
    service.numberRandom = jest.fn().mockReturnValue(10);
    expect(service.numberRandom()).toBe(10);
  });

  it('', () => {

  })
})
