test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  });
  // o primeiro test da error por falta da callback done do jest
  test('Não deveria passar!', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    }, 500);
  });
  // 
//   const asyncSum = (a, b, callback) => {
//     setTimeout(() => {
//       const result = a + b;
//       callback(result);
//     }, 500);
//   };
  
  test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(5, 10, (result) => {
      try {
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    });
  });