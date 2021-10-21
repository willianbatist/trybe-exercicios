const bodyGod = document.querySelector('body');
const bodyMain = document.createElement('main');
bodyMain.id = 'main-content';
bodyGod.appendChild(bodyMain);

const father = document.querySelector('main');
const childFather = document.createElement('section');
childFather.className = 'right-content';
father.appendChild(childFather);

let listUl = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let fatherList = document.querySelector('.listaTest');

for (let index = 0; index < listUl.length; index += 1) {
    let itemListUl = listUl[index];
    let tagListUl = document.createElement('li');
    tagListUl.innerText = itemListUl;
   fatherList.appendChild(tagListUl); 

}
