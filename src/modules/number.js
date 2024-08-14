

export default function numberFormat(number, digits) {
  return number.toLocaleString('en-US', {maximumFractionDigits: digits});
}