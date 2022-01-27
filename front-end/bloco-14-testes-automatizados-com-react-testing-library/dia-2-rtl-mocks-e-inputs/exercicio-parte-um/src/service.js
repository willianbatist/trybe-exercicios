export const numberRandom = () => {
  const zero = Math.ceil(0);
  const cem = Math.floor(100);
  return Math.floor(Math.random() * (cem - zero)) + zero;
}
