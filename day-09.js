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


