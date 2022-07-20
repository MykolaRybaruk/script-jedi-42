// 1) Syntax task
// https://www.codewars.com/kata/is-this-my-tail/train/javascript

const correctTail = (body, tail) => body[body.length - 1] === tail[0] ? true : false ;

// 2) Do I get a bonus
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

const bonusTime = (salary, bonus) => bonus == true ? '\u00A3' + salary * 10 : '\u00A3' + salary;
