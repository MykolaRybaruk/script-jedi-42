// [JEDI LEVEL] Implement own reduce
// https://www.codewars.com/kata/array-number-reduce/train/javascript

Array.prototype.reduce = function(process, initial) {
  var reduction;
  if(initial == undefined){
    reduction = this[0];
    for(var i = 1; i < this.length; i++){
      reduction = process(reduction, this[i]);
    }
  } else {
    reduction = initial;
    for(var i = 0; i < this.length; i++){
      reduction = process(reduction, this[i]);
     }
  }
  return reduction;
}
