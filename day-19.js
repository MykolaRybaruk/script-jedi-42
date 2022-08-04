// #37: Unlock new weapon---RegExp Object
// http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const result = [];
  for (const animal of count) {
    const match = (animals.match(new RegExp(animal, 'g')) || []).length;
    result.push(match);
  }
  return result;
}





// #38: Regular Expression--""^"",""$"", ""."" and test()
// http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str,word){
  const srtWordsArray = str.split(' ');

  const wordChars = word[0] + word.slice(1, -1).replace(/./g, '.') + word[word.length - 1];

  const filtered = srtWordsArray.filter((x) => {
    if (x[0] + x.slice(1, -1).replace(/./g, '.') + x[x.length - 1] === wordChars) {
      return x;
    }
  })
  return filtered.join(' ');
}
