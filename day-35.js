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
