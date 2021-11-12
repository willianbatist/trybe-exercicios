////// Pecorrendo object //////

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
////// mostra apenas os nomes das chaves, exemplo name, genre, author e etc... //////
for (const property in coolestTvShow) {
  console.log(property);
}

////// coloca os nomes das chaves em um array, exemplo [ 'name', 'genre', 'createdBy'] //////
console.log(Object.keys(coolestTvShow));

////// assim ira mostras as posições no length.
const numb = Object.keys(coolestTvShow);
console.log(Object.keys(numb));