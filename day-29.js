// How new works
// https://www.codewars.com/kata/how-new-works

const myObj = {__proto__ : MyObject.prototype};

MyObject.call(myObj);




// Replicate new
// http://www.codewars.com/kata/replicate-new

function nouveau (Constructor, ...arguments) {
  const instance = Object.create(Constructor.prototype);
  const binded = Constructor.bind(instance)(...arguments);
  return Object(binded) === binded ? binded : instance;
}
