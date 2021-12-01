const apiUrl = 'https://api.coincap.io/v2/assets';
const ul = document.querySelector('#ol-lista');

function coin1 (coin) {
    const li = document.createElement('li');
    const priceUsd = Number(coin.priceUsd);
    li.innerText = `${coin.name} (${coin.symbol}): ${priceUsd.toFixed(2)} USD`;
    ul.appendChild(li);
}

function fetchCoin () {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.data.filter((coin) => coin.rank <= 10).forEach((coin) => coin1(coin));
    });
};

fetchCoin();