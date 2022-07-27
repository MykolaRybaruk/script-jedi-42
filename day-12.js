// 1) Word to Binary
// https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str) {
  const arr = str.split('');
  const code = arr.map((x) => x.codePointAt(0));
  const binary = code.map((x) => x.toString(2));
  const result = binary.map((x) => '0' + x);
  return result;
}
