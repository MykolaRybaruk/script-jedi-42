// #24: methods of arrayObject---splice() and slice()
// http://www.codewars.com/kata/572cb264362806af46000793

function threeInOne(arr) {
  const arrCopy = [...arr];
  const cuttedArray = [];
  for (let i = 0; i < arr.length / 3; i++) {
    const j = arrCopy.splice(0, 3);
    cuttedArray.push(j);
  }
  const secondItemReversed = cuttedArray.map((x) =>
    cuttedArray.indexOf(x) === 1 ? x.reverse() : x
  );
  const result = secondItemReversed.map((x) => {
    return x.reduce((prev, item) => prev + item, 0);
  });
  return result;
}


// #25: methods of arrayObject---reverse() and sort()
// http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  const str = [...arr];
  return str.sort((a, b) => {
    const strone = counter(arr, a) - counter(arr, b); // a-b ascending sort
    return strone === 0 ? b - a : strone;
  }); // b-a descending sort
}
function counter(arr, elcounter) {
  return arr.filter((el) => el === elcounter).length;
}








// #26: methods of arrayObject---map()
// http://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr) {
  const chars = arr.map((x) => {
    return x.split('');
  });

  chars.map((x) => {
    if (x.length % 2 === 0) {
      return x.splice(x.length / 2, 0, '|');
    } else {
      return x.splice(x.length / 2, 1, '|');
    }
  });

  return chars.map((x) => x.join(''));
}


