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

