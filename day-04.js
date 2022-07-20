// 1)  #9: loop statement --while and do..while
// http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  let even = n % 2;
  let half = n / 2;
  let i = 0;
  let leftSide = '';
  let rightSide = '';
  
  if (even === 0) {
    while (i < half) {
      leftSide += '*';
      i++;
      rightSide = leftSide;
    }
    return leftSide + str + rightSide;
  } else {
    leftSide = '*'.repeat(Math.ceil(half));
    rightSide = '*'.repeat(Math.floor(half));
    return leftSide + str + rightSide;
  }
}



// 2) #10: loop statement --for
// http://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(nums) { 
  const odd = [], even = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }  
  return [odd, even];
}
