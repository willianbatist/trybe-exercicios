const numberRandom = () => {
  const zero = Math.ceil(0);
  const cem = Math.floor(100);
  return Math.floor(Math.random() * (cem - zero)) + zero;
}

const dogs = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { numberRandom, dogs };