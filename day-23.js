// Unpacking arguments
// http://www.codewars.com/kata/unpacking-arguments

function spread(func, args) {
  return func(...args);
}




// For the sake of argument
// http://www.codewars.com/kata/for-the-sake-of-argument

const numbers = (...args) => {
  return [...args].every((x) => typeof x === 'number');  
}
