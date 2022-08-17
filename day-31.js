// Singleton pattern 
// https://www.codewars.com/kata/singleton-pattern/train/javascript

const Singleton = function(){
  const instance = Singleton.instance;
  if (instance) return instance;
  Singleton.instance = this;
};
