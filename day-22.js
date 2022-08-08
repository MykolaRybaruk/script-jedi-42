// Check your arrows
// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

function anyArrows(arrows){
  return arrows.some((x) => x.damaged !== true);
}

// [JEDI LEVEL] Currying functions: multiply all elements in an array
// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

const multiplyAll = arr => mult => arr.map((x) => x * mult);
