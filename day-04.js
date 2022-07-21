// 1)  #9: loop statement --while and do..while
// http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  const even = n % 2;
  const half = n / 2;
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

function pickIt(arr) { 
  const odd = [], even = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }  
  return [odd, even];
}




// 3) #11: loop statement --break,continue
// http://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  const bag = [];
  for (const doll of dolls) {
     if (doll === 'Barbie doll' || doll === 'Hello Kitty') {
       bag.push(doll);
       if (bag.length === 3) {
         break;
       } else {
         continue;
       }
     }
  }
  return bag;
}




// 4) #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  const five = [];
  for (let key in obj) {
    if (key.length === 5 && obj[key].length !== 5) {
      five.push(key);
    } else if (key.length !== 5 && obj[key].length === 5) {
      five.push(obj[key]);
    } else if (key.length === 5 && obj[key].length === 5) {
      five.push(key, obj[key]);
    }
  }

  return five;
}

