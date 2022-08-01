//
//









// 2) loopArray
// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

function loopArr(arr, direction, steps) {
  if (direction === 'left') {
    for (let i = 0; i < steps; i++) {
      let j = arr.shift();
      arr.push(j);
    }
  } else if (direction === 'right') {
    for (let i = 0; i < steps; i++) {
      let item = arr.pop();
      arr.unshift(item);
    }
  }
  return arr;
}
