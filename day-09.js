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





// 3) #18: Methods of String object--concat() split() and its good friend join()"
// http://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  const words = string.split(' ');
  const letters = words.map((item) => {
    return item.split('');
  });
  const fixed = letters.map((item) => {
    return item.join(separator);
  });

  return fixed.join(' ');
}
