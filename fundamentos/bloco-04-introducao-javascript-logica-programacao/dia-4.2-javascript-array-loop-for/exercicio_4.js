let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalNumbers = 0;
let mediaNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
    totalNumbers += numbers[index];
}
    mediaNumber = totalNumbers / numbers.length;

if (mediaNumber > 20) {
    console.log("Maior que 20");
}
else {
    console.log("Igual ou menor que 20");
}