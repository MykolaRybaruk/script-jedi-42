//
//

function areEqual(s1, s2){
  let set1 = [...s1];
  let set2 = [...s2];
  
  if (set1.every(item => s2.has(item)) && set1.length == set2.length) {
    return true;
  } else {
    return false;
  }
}

function notEqual(s1, s2){
  let set1 = [...s1];
  let set2 = [...s2];
  
  if (set1.every(item => s2.has(item)) && set1.length == set2.length) {
    return false;
  } else {
    return true;
  }

}

