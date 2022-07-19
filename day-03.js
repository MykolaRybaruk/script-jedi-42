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

// 3) #8: Conditional statement--switch 
// http://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month) {
  let days;
  switch (month) {
    case 1:
      days = 31;
      break;

    case 2:
      days = 28;
      break;

    case 3:
      days = 31;
      break;

    case 5:
      days = 31;
      break;
    case 7:
      days = 31;
      break;

    case 8:
      days = 31;
      break;

    case 10:
      days = 31;
      break;

    case 12:
      days = 31;
      break;

    default:
      days = 30;
  }
  return days;
}
