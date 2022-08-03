// #30: methods of arrayObject---reduce() and reduceRight()
// http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  const arrCopy = [...arr];

  const arrString = arrCopy.map((x) => {
    return String(x);
  });

  //finding the numbers for summary
  const forSum = [];
  forSum.push(Number(arrString[0][arrString[0].length - 1]));
  arrString.shift();

  arrString.map((x) => {
    forSum.push(Number(x[0]));
    forSum.push(Number(x[x.length - 1]));
    return x;
  });
  forSum.pop();

  const sumArray = [];
  const size = 2;
  for (let i = 0; i < Math.ceil(forSum.length / size); i++) {
    sumArray[i] = forSum.slice(i * size, i * size + size);
  }

  // finfing the multipliers

  const multipliers = sumArray.map((x) => {
    return x.reduce((a, b) => a + b);
  });

  const result = multipliers.reduce((a, b) => a * b);
  
  
  
  
  // #31: methods of arrayObject---isArray() indexOf() and toString()
  // http://www.codewars.com/kata/5732b0351eb838d03300101d
  
  function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return `It's a fake array`;
  }

  if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
    return `It's a black array`;
  } else {
    return `It's a white array`;
  }
}

  return result;
}

