const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let chamadandoTagLi1 = document.querySelector("#second-li");
chamadandoTagLi1.addEventListener('click', clickMudadeTag);
let chamadandoTagLi2 = document.querySelector("#third-li");
chamadandoTagLi2.addEventListener('click', clickMudadeTag);

function clickMudadeTag (eventOrigem) {
    chamadandoTagLi1.className = "tech";
    chamadandoTagLi2.className = "tech";
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
    let caixaDeTexto = document.querySelector('#input');
    let mostraTexto = document.querySelector('.tech');

    function incluindoTextoNaBox () {
        mostraTexto.innerText = caixaDeTexto.value
        
    }
    caixaDeTexto.addEventListener("input",incluindoTextoNaBox);
   


    let mostraTexto2 = document.querySelector('#second-li');
    function mudarCaixaText () {
        let caixaTexto2 = document.querySelector('#input')
        caixaTexto2.placeholder = "Alterar a segunda tecnologia"
        
    }
    mostraTexto2.addEventListener("dblclick",mudarCaixaText);
    let caixaTexto2 = document.querySelector('#input');
    function incluindoTextoNaBox2 (){
        mostraTexto2.innerText = caixaTexto2.value
    }
    caixaTexto2.addEventListener('change',incluindoTextoNaBox2)



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.