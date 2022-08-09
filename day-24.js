// Duplicate arguments
// http://www.codewars.com/kata/duplicate-arguments

function solution(...args){
  const set1 = new Set([...args]);
  const argsCopy = [...args];
  return set1.size !== argsCopy.length;
}





// [JEDI LEVEL] Last Argument
// http://www.codewars.com/kata/last

function last(...list){
  return list[list.length - 1][list[list.length - 1].length-1] || list[list.length - 1]
}
