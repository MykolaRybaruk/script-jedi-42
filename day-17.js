// #27: methods of arrayObject---filter() 
// http://www.codewars.com/kata/573023c81add650b84000429

function countGrade(scores) {
  const result = {};
  result.S = scores.filter((x) => x === 100).length;
  result.A = scores.filter((x) => x < 100 && x >= 90).length;
  result.B = scores.filter((x) => x < 90 && x >= 80).length;
  result.C = scores.filter((x) => x < 80 && x >= 60).length;
  result.D = scores.filter((x) => x < 60 && x >= 0).length;
  result.X = scores.filter((x) => x === -1).length;
  return result;
}




// #28: methods of arrayObject---every() and some()
// http://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  const result = [-1, -1];
  const reversed = arr.map((x) => {
    return [x].toString().split('').reverse().join('');
  });
  arr.some((x, i) => {
    if (arr[i] == reversed[i + 1]) {
      const a = arr[i];
      const b = arr[i + 1];
      result.length = 0;
      result.push(a, b);
      return true;
    }
  });

  return result;
}


