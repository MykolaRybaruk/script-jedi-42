// 1) Playing with Sets : Equal or Not ?
// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2){
  const set1 = [...s1];
  const set2 = [...s2];
  
  if (set1.every(item => s2.has(item)) && set1.size == set2.size) {
    return true;
  } else {
    return false;
  }
}

function notEqual(s1, s2){
  return !areEqual(s1, s2);
}

