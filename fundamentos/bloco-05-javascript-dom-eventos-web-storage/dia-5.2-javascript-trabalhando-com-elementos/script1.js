// const paiTag2 = document.getElementById("elementoOndeVoceEsta");
// const filhoElementoOnde = document.createElement("section");
// filhoElementoOnde.id = "filhoElementoOndeVoceEsta";
// paiTag2.appendChild(filhoElementoOnde);


 const filhosRemove = document.querySelector("#pai");
 const filhoRemove = document.querySelector("#elementoOndeVoceEsta");
 filhosRemove.removeChild(filhoRemove);
 
 const filhoRemove1 = document.querySelector("#primeiroFilho");
 filhosRemove.removeChild(filhoRemove1);