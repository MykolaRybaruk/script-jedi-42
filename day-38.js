// Generators #1
// https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
  let count = 1;
  while (true) {
    let rs = yield count;
    count = rs || count + 1;
  }
}
