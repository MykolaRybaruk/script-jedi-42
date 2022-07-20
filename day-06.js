// 1) Maximum Multiple
// https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound){
    const arr = [];
  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) {
      arr.push(i);
    }
  }

  const max = Math.max(...arr);
  return max;
}




// 2) Is he gonna survive?
// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

const hero = (bullets, dragons) => bullets >= dragons * 2;




// 3) 5 without numbers
// https://www.codewars.com/kata/59441520102eaa25260000bf

function unusualFive() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  return arr.length;
}
