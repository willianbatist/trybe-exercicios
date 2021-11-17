// retorna contagem de 0 a 5
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
repeat(5, console.log);
