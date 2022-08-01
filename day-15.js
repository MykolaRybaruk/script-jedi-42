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
  if (direction === 'right') {
    for (let i = 0; i < steps; i++) {
      let item = arr.pop();
      arr.unshift(item);
    }
  }
  return arr;
}




// 3) #23: methods of arrayObject---push(), pop(), shift() and unshift()
// http://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr, d, n) {
  const allItems = arr[0].concat(arr[1].concat(arr[2]));
  if (d === 'left') {
    for (let i = 0; i < n; i++) {
      const item = allItems.shift();
      allItems.push(item);
    }
  }

  if (d === 'right') {
    for (let i = 0; i < n; i++) {
      const item = allItems.pop();
      allItems.unshift(item);
    }
  }

  const firstPart = allItems.slice(0, arr[0].length);

  const secondPart = allItems.slice(
    arr[0].length,
    arr[0].length + arr[1].length
  );

  const thirdPart = allItems.slice(arr[0].length + arr[1].length);

  const result = [];
  result.push(firstPart, secondPart, thirdPart);
  return result;
}
