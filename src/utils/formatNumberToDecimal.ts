export const formatNumberToDecimal = (number: number) => {
  if (Math.abs(number) < 0.01) {
    return number.toFixed(4); 
  }
  return number.toFixed(2);
}