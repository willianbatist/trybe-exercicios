function handleValidationNumber(number) {
  if (number > 0) {
    return "Positivo";
  }
  if (number < 0) {
    return "Negativo";
  }

  return "Neutro";

};

module.exports = handleValidationNumber;
