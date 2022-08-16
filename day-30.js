// SantaClausable Interface
// http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
  const a = obj.sayHoHoHo instanceof Object;
  const b = obj.distributeGifts instanceof Object;
  const c = obj.goDownTheChimney instanceof Object;

  if (a === true && b === true && c === true) {
    return true;
  } else {
    return false;
  }
}
