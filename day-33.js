// [JEDI LEVEL] Implement own reduce
// https://www.codewars.com/kata/array-number-reduce/train/javascript

Array.prototype.reduce = function(process, initial) {
  let reduction;
  if(initial == undefined){
    reduction = this[0];
    for(let i = 1; i < this.length; i++){
      reduction = process(reduction, this[i]);
    }
  } else {
    reduction = initial;
    for(let i = 0; i < this.length; i++){
      reduction = process(reduction, this[i]);
     }
  }
  return reduction;
}




// [JEDI LEVEL] Deep freeze
// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056
Object.deepFreeze = function (object) {
  Object.freeze(object);
  
    for (const key in object) {
      if (typeof object[key] === 'object') {
        return Object.freeze(object[key]);
      }
    }
  
  return Object.deepFreeze(object[key]);
  
};
