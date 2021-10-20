/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
\/ Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

\/  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
\/ Crie uma função que mude a cor do quadrado vermelho para branco.
\/ Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
     
function byParagrafo (paragrafo, texto) {
    document.getElementsByTagName(paragrafo)[0].innerText = texto;
}
byParagrafo ("p", "Desenvolvedor Web");

function byBackgroundColorMain (stringClass, stringColor) {
    document.getElementsByClassName(stringClass)[0].style.backgroundColor = stringColor;
}
byBackgroundColorMain ("main-content", "rgb(76,164,109)");

byBackgroundColorMain ("center-content", "white");

function corretorH1 (stringtag, stringText) {
    document.getElementsByClassName(stringtag)[0].innerText = stringText;
}
corretorH1 ("title", "Exercício 5.1 - JavaScripit");

function byParagrafoMaisculo (paragrafo, texto) {
    document.getElementsByTagName(paragrafo).innerText = texto;
}