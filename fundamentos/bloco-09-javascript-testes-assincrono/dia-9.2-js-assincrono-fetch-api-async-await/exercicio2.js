const apiUrl = 'https://api.coincap.io/v2/assets';
const ul = document.querySelector('#ol-lista');



function fetchCoin () {

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const abrindoObjeto = data.data;
        abrindoObjeto.filter((coin) => Number(coin.rank) <= 10)
        .forEach((coin) =>{
            const li = document.createElement('li');
            const priceUsd = Number(coin.priceUsd);
            li.innerText = `${coin.name} (${coin.symbol}): ${priceUsd.toFixed(2)} USD`;
            ul.appendChild(li)
        })
    });
};
fetchCoin();