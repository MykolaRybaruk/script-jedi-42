// 1) #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const upper = str.toUpperCase();
  const words = upper.split(' ');
  const result = words.map((item) => {
    return item.slice(0, -1) + item[item.length - 1].toLowerCase();
  });
  return result.join(' ');
}
