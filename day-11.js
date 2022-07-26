// 1) Playing with Sets : Equal or Not ?
// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2){
  const set1 = [...s1];
  const set2 = [...s2];
  
  if (set1.every(item => s2.has(item)) && set1.length == set2.length) {
    return true;
  } else {
    return false;
  }
}

function notEqual(s1, s2){
  return !areEqual(s1, s2);
}




// 2) Operations with Sets
// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // finding elements present in both arrays
  const intersection = new Set([...set1].filter((x) => set2.has(x)));

  // finding unique arrays element
  const uniqueInFirstArray = new Set([...set1].filter((x) => !set2.has(x)));
  const uniqueInSecondArray = new Set(
    [...set2].filter((item) => !set1.has(item))
  );

  const uniqueElementsInBothArrays =
    uniqueInFirstArray.size + uniqueInSecondArray.size;

  //finding elements that left after removing second array
  const leftInArr1 = set1.size - intersection.size;

  //finding elements that left after removing second array
  const leftInArr2 = set2.size - intersection.size;
  const result = [];
  result.push(
    intersection.size,
    uniqueElementsInBothArrays,
    leftInArr1,
    leftInArr2
  );
  return result;
}
