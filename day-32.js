// "this"" is a problem
// http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName; 
  return this.name;
};





// ""this"" is an other problem
// https://www.codewars.com/kata/this-is-an-other-problem

class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(text) {
    const fullNameWords = text.split(' ');
    if (fullNameWords.length <= 1) {
      return true;
    } else {
      this.firstName = fullNameWords[0];
      this.lastName = fullNameWords[1];
    }
  }
}
