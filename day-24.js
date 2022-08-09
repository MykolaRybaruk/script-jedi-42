// Duplicate arguments
// http://www.codewars.com/kata/duplicate-arguments

function solution(...args){
  const set1 = new Set([...args]);
  const argsCopy = [...args];
  return set1.size !== argsCopy.length;
}
