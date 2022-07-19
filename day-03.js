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

const saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);
