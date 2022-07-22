// 1) #16: Methods of String object--slice(), substring() and substr()
// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr) {
  const length = arr.map((item) => {
    return item.length; //returns items length
  });
  const minLength = Math.min(...length); //returns minimal length that will be used for slicing
  const result = arr.map((item) => {
    return item.substr(0, minLength);
  });
  return result;
}





// 2) #17: Methods of String object--indexOf(), lastIndexOf() and search()
// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str, c) {
  const firstIndex = str.search(c);
  const lastIndex = str.lastIndexOf(c);

  if (firstIndex != '-1' && lastIndex != '-1') {
    return lastIndex - firstIndex;
  }

  if (str.indexOf(c) == -1) {
    return str.indexOf(c);
  }
}



