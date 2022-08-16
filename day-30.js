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



// Cylon Evolution
// http://www.codewars.com/kata/cylon-evolution

function Cylon(model){
  this.model = model;
  this.attack = function () {
    return 'Destroy all humans!';
  }
}


function HumanSkin(model){
  this.infiltrate = () => 'Infiltrate the colonies';
  this.model = model;
}

HumanSkin.prototype = new Cylon();


// Call function using apply
// http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function(a, ...b) {
  return this.apply(a, b);
}
