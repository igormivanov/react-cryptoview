export const formatNumberToBillion = (number: number) => {
  return Math.abs(Number(number)) >= 1.0e+9

    ? (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + "B"

    : Math.abs(Number(number)) >= 1.0e+6

    ? (Math.abs(Number(number)) / 1.0e+6).toFixed(2) + "M"

    : Math.abs(Number(number)) >= 1.0e+3

    ? (Math.abs(Number(number)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(number));
}