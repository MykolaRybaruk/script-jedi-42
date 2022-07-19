// 1) #6: Basic data types--Boolean and conditional statements if..else
// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

function trueOrFalse(val) {
  if (val == false || val == null || val == undefined) {
    return 'false';
  } else {
    return 'true';
  }
}

// 2) #7: if..else and ternary operator
// http://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n){
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}
