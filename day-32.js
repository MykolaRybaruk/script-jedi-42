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
    let arr = text.split(' ');
    if (arr.length <= 1) {
      return true;
    } else {
      this.firstName = arr[0];
      this.lastName = arr[1];
    }
  }
}
