// 1) #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const upper = str.toUpperCase();
  const words = upper.split(' ');
  const result = words.map((item) => {
    return item.slice(0, -1) + item[item.length - 1].toLowerCase();
  });
  return result.join(' ');
}

// 2) #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// http://www.codewars.com/kata/57284d23e81185ae6200162a

function topSecret(str) {
  const letters = str.split('');
  const code = letters.map((item) => {
    return item.charCodeAt();
  });
  const fixed = code.map((item) => {
    if ((item >= 65 && item <= 67) || (item >= 97 && item <= 99)) {
      return item + 23;
    } else if ((item >= 68 && item <= 90) || (item >= 100 && item <= 120)) {
      return item - 3;
    } else {
      return item;
    }
  });
  const arr = fixed.map((item) => {
    return String.fromCharCode(item);
  });
  return arr.join('');
}

//question1: The top secret file number is...
answer1="2350";
//question2: Super agent's name is...
answer2="ZVQdfC";
//question3: He stole the treasure is...
answer3="bird's nest";




// 3) #21: Methods of String object--trim() and the string template
//  http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s) {
  const trimmed = s.trim();
  return `${trimmed}\n${trimmed}${trimmed}\n${trimmed}${trimmed}${trimmed}\n${trimmed}${trimmed}${trimmed}${trimmed}\n${trimmed}${trimmed}${trimmed}${trimmed}${trimmed}`;
}

