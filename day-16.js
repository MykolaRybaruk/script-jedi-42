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

