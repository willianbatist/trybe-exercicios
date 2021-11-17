// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
    const status1 = () => 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
    const status2 = () => 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
    const status3 = () => 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
    const statusAtual = (callback) => {
        return callback();
    }; 

    console.log(statusAtual(status2));

    // logica dois possivel
    // const statusAtual = () => {
    //     const statusFull = { status1: status1(), status2: status2(), status3: status3()}
    //     return statusFull;
    // };
