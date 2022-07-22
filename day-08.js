// 1) Number object and its properties
// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n){
  if (n == Number.MAX_VALUE) {
    return 'Input number is Number.MAX_VALUE';
  }

  if (n == Number.MIN_VALUE) {
    return 'Input number is Number.MIN_VALUE';
  }
  
  if (n == Number.POSITIVE_INFINITY) {
    return 'Input number is Number.POSITIVE_INFINITY';
  }
  
  if (n == Number.NEGATIVE_INFINITY) {
    return 'Input number is Number.NEGATIVE_INFINITY';
  }
 return isNaN(n) ? 'Input number is Number.NaN' : 'Input number is ' + n;
}





// 2) Methods of Number object--toString() and toLocaleString():
// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
  const red = ('0' + r.toString(16)).slice(-2);
  const green = ('0' + g.toString(16)).slice(-2);
  const blue = ('0' + b.toString(16)).slice(-2);

  return '#' + red + green + blue;
}

colorOf(255, 0, 0);
