// Function within a function (Submit може не працювати, перевірте чи проходить Attempt)
// http://www.codewars.com/kata/a-function-within-a-function

function always (n) {
  return function () {
    return n;
  }
}
