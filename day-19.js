// #37: Unlock new weapon---RegExp Object
// http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const result = [];
  for (const animal of count) {
    const match = (animals.match(new RegExp(animal, 'g')) || []).length;
    result.push(match);
  }
  return result;
}
