// 1) Word to Binary
// https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str) {
  const char = str.split('');
  const code = char.map((x) => x.codePointAt(0));
  const binary = code.map((x) => x.toString(2));
  const result = binary.map((x) => '0' + x);
  return result;
}


// 2) Char Codes Calculation
// https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x) {
  const letters = x.split('');
  const codes = letters.map((x) => x.charCodeAt()).join('');
  const stringNumbers = codes.split('');
  const numbers = stringNumbers.map((x) => Number(x));
  const total1 = numbers.reduce((prev, x) => prev + x, 0);
  const replaced = numbers.map((x) => {
    if (x === 7) {
      return x - 6;
    } else {
      return x;
    }
  });
  const total2 = replaced.reduce((prev, x) => prev + x, 0);

  return total1 - total2;
}
