// Understanding closures - the basics
// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n){
	const res = [];
	for (let i = 0; i < n; i++){
		res.push(function(){
			return i;
		})
	}
	return res
}


// Shifty closures
// https://www.codewars.com/kata/shifty-closures/train/javascript

function create_greeter(name) {
  return function () {
    return 'Hello, ' + name + '!';
  };
}

let name = 'Abe';
const greet_abe = create_greeter(name);
greet_abe();

name = 'Ben';
const greet_ben = create_greeter(name);
greet_ben();
