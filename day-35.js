// Object Prototypes
// https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes

widget.__proto__.description = 'TODO: GIVE ME A DESCRIPTION'





// Class-Like Objects
// https://www.codewars.com/kata/javascript-class-like-objects

class Animal {
  constructor (name, type) {
    this.name = name;
    this.type = type;
    this.toString = function (name, type) {
      return `${this.name} is a ${this.type}`;}
  };
} 




// [JEDI LEVEL] Power of bind
// http://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    const correctCtx = this === global ? ctx : this;
    return func.apply(correctCtx, args);
  }
};
