let verificar = (meuNumero, numeros) => meuNumero === numeros;
const sorteio = (meuNumero, callback) => {
    const numeros = Math.floor((Math.random() * 5) + 1);
    console.log(numeros);
    return callback (meuNumero, numeros) ? 'Você ganhou' : 'Você perdeu';
};

console.log(sorteio(2, verificar));